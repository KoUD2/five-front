'use client'

import SearchClassItem from '@/components/ui/classes/search_class/search_class_item/SearchClassItem'
import { ClassService } from '@/services/classes/class.service'
import { IClass } from '@/shared/types/class/class.types'
import { setSelectedClass } from '@/store/classSlice'
import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './SearchClassComponent.module.scss'

import { addSelectedClass } from '@/store/classSlice'
import InfoEmpty from '../info_empty/InfoEmpty'

const SearchClassComponent: FC = () => {
	const dispatch = useDispatch()
	const [classId, setClassId] = useState<string>('')
	const [searchMessage, setSearchMessage] = useState<string>('')
	const { data, refetch, isFetching } = useQuery<IClass | null>({
		queryKey: ['class-title', classId],
		queryFn: () => ClassService.getById(classId!),
		enabled: false,
	})

	const handleSearch = async () => {
		if (classId) {
			setSearchMessage('')
			try {
				const result = await refetch()
				if (Array.isArray(result.data) && result.data.length === 0) {
					setSearchMessage('Класс не найден')
				}
			} catch (error) {
				setSearchMessage('Произошла ошибка при поиске класса')
			}
		}
	}

	const handleClassSelect = (classData: IClass) => {
		dispatch(setSelectedClass(classData))
		dispatch(addSelectedClass(classData))
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperSearch}>
				<input
					type='text'
					placeholder='ID класса'
					value={classId}
					onChange={e => setClassId(e.target.value)}
				/>
				<button onClick={handleSearch}>Найти</button>
			</div>

			<div className={styles.wrapperAllClasses}>
				{isFetching && (
					<InfoEmpty text='Идет поиск...' className={styles.emptyField} />
				)}
				{searchMessage && (
					<InfoEmpty text={searchMessage} className={styles.emptyField} />
				)}

				{Array.isArray(data) && data.length > 0 && (
					<SearchClassItem classData={data[0]} onSelect={handleClassSelect} />
				)}
			</div>
		</div>
	)
}

export default SearchClassComponent
