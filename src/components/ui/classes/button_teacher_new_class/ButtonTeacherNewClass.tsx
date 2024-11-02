import { addCreateClassForm } from '@/store/classSlice'
import cn from 'classnames'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import styles from '../button_new_class/ButtonNewClass.module.scss'

interface ButtonNewClassProps {
	className?: string
}

const ButtonTeacherNewClass: FC<ButtonNewClassProps> = ({ className }) => {
	const dispatch = useDispatch()

	return (
		<button
			className={cn(styles.wrapperButton, className)}
			onClick={() => dispatch(addCreateClassForm())}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				color='#fff'
			>
				<rect width='18' height='18' x='3' y='3' rx='2' />
				<path d='M8 12h8' />
				<path d='M12 8v8' />
			</svg>
			<h2>Создать класс</h2>
		</button>
	)
}

export default ButtonTeacherNewClass
