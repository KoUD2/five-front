import { ClassService } from '@/services/classes/class.service'
import { UserGetService } from '@/services/user/userget.service'
import { IUser } from '@/shared/types/types'
import { setSelectedUser } from '@/store/user/userSlice'
import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
	showErrorToast,
	showSuccessToast,
} from '../../toast_notifications/toastNotifications'
import InfoEmptyMini from '../info_empty_mini/InfoEmptyMini'
import ButtonSaveTest from './button_save_test/ButtonSaveTest'
import styles from './FormCreateClass.module.scss'
import ChosenUserItem from './search_user_item/ChosenUserItem'
import SearchUserItem from './search_user_item/SearchUserItem'
import SvgEmptyIcon from './svg_empty_icon/SvgEmptyIcon'

interface FormCreateClassProps {
	idPrefix: string
	onFormCreated: () => void
}

const FormCreateClass: FC<FormCreateClassProps> = ({
	idPrefix,
	onFormCreated,
}) => {
	const dispatch = useDispatch()
	const [isStudentsAdded, setIsStudentsAdded] = useState(false)
	const [userId, setUserId] = useState<string>('')
	const [classNameMy, setClassNameMy] = useState<string>('')
	const [classDescription, setClassDescription] = useState<string>('')
	const [searchMessage, setSearchMessage] = useState<string>('')
	const [selectedUsers, setSelectedUsers] = useState<IUser[]>([])

	const [errors, setErrors] = useState({
		className: false,
		classDescription: false,
		students: false,
	})

	const handleAddStudentsClick = () => {
		setIsStudentsAdded(prevState => !prevState)
	}

	const handleSearch = async () => {
		if (userId) {
			setSearchMessage('')
			try {
				const result = await refetch()
				if (Array.isArray(result.data) && result.data.length === 0) {
					setSearchMessage('Пользователь не найден')
				}
			} catch (error) {
				setSearchMessage('Произошла ошибка при поиске пользователя')
			}
		}
	}

	const handleUserSelect = (userData: IUser) => {
		dispatch(setSelectedUser(userData))
		setSelectedUsers(prev => [...prev, userData])
		setUserId('')
	}

	const { data, refetch, isFetching } = useQuery<IUser | null>({
		queryKey: ['user-tag', userId],
		queryFn: () => UserGetService.getById(userId!),
		enabled: false,
		select: data => data,
	})

	const handleRemoveUser = (userIdToRemove: string) => {
		setSelectedUsers(prevUsers =>
			prevUsers.filter(user => user.hashId !== userIdToRemove)
		)
	}

	const handleSaveClass = async () => {
		setErrors({
			className: false,
			classDescription: false,
			students: false,
		})

		let hasErrors = false

		if (!classNameMy) {
			setErrors(prev => ({ ...prev, className: true }))
			hasErrors = true
		}
		if (!classDescription) {
			setErrors(prev => ({ ...prev, classDescription: true }))
			hasErrors = true
		}
		if (selectedUsers.length === 0) {
			setErrors(prev => ({ ...prev, students: true }))
			hasErrors = true
		}

		if (hasErrors) {
			showErrorToast('Пожалуйста, заполните все поля')
			setTimeout(() => {
				setErrors({
					className: false,
					classDescription: false,
					students: false,
				})
			}, 5000)
			return
		}

		const students = selectedUsers.map(user => user.hashId)
		const classData = {
			name: classNameMy,
			description: classDescription,
			students,
		}

		try {
			const response = await ClassService.createClass(classData)
			showSuccessToast('Класс успешно создан!')
			onFormCreated()
		} catch (error) {
			console.error('Ошибка при создании класса:', error)
			showErrorToast('Ошибка при создании класса')
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.leftAreaDescription}>
				<div>
					<SvgEmptyIcon className={styles.svg} />
					<input
						type='text'
						id={`${idPrefix}-className`}
						name='className'
						placeholder='Название класса'
						autoComplete='off'
						value={classNameMy}
						onChange={e => setClassNameMy(e.target.value)}
						className={`${errors.className ? styles.error : ''}`}
					/>
				</div>
				<textarea
					id={`${idPrefix}-classDescription`}
					name='classDescription'
					placeholder='Описание класса'
					autoComplete='off'
					value={classDescription}
					onChange={e => setClassDescription(e.target.value)}
					className={`${errors.classDescription ? styles.error : ''}`}
				></textarea>
			</div>
			<div className={styles.wrapperInfoStudents}>
				<div className={styles.wrapperChosen}>
					{selectedUsers.map(user => (
						<div
							key={`${user.hashId}-${user.name}`}
							className={styles.selectedUser}
						>
							<ChosenUserItem
								userData={user}
								onClick={() => handleRemoveUser(user.hashId)}
							/>
						</div>
					))}
				</div>
				<button onClick={handleAddStudentsClick} className={styles.button}>
					<p style={{ color: isStudentsAdded ? 'black' : '#adadad' }}>
						добавить учеников
					</p>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='15'
						height='8'
						viewBox='0 0 15 8'
						fill='none'
						style={{
							transform: isStudentsAdded ? 'rotate(180deg)' : 'rotate(0deg)',
							transition: 'transform 0.3s ease-out',
						}}
					>
						<path
							d='M13.7499 6.875L7.49988 0.625L1.24988 6.875'
							stroke={isStudentsAdded ? '#000' : '#adadad'}
							strokeWidth='1.2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</button>
				{isStudentsAdded && (
					<div className={styles.wrapperAllUsers}>
						<div className={styles.wrapperSearchUsers}>
							<input
								type='text'
								id={`${idPrefix}-studentTag`}
								name='studentTag'
								placeholder='Тег ученика'
								className={styles.inputStudentHash}
								autoComplete='off'
								onChange={e => setUserId(e.target.value)}
							/>
							<button onClick={handleSearch}>Найти</button>
						</div>
						{searchMessage && (
							<InfoEmptyMini
								text={searchMessage}
								className={styles.InfoEmptyMini}
							/>
						)}
						{Array.isArray(data) && data.length > 0 && (
							<SearchUserItem userData={data[0]} onSelect={handleUserSelect} />
						)}
					</div>
				)}
				{Array.isArray(selectedUsers) && selectedUsers.length !== 0 && (
					<ButtonSaveTest onClick={handleSaveClass} />
				)}
			</div>
		</div>
	)
}

export default FormCreateClass
