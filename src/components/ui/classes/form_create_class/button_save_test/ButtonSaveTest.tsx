import { FC } from 'react'
import styles from './ButtonSaveTest.module.scss'

const ButtonSaveTest: FC<{ onClick: any }> = ({ onClick }) => {
	return (
		<button className={styles.wrapper} onClick={onClick}>
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
			<h2>Сохранить класс</h2>
		</button>
	)
}

export default ButtonSaveTest
