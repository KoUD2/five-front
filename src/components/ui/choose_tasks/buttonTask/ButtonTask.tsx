import { FC } from 'react'
import styles from './ButtonTask.module.scss'

interface ButtonTaskProps {
	text: string
	onClick?: () => void
}

const ButtonTask: FC<ButtonTaskProps> = ({ text, onClick }) => {
	return (
		<button className={styles.wrapper} onClick={onClick}>
			{text}
		</button>
	)
}

export default ButtonTask
