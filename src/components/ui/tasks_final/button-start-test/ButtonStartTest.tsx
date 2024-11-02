import cn from 'classnames'
import { FC } from 'react'
import styles from './ButtonStartTest.module.scss'

const ButtonStartTest: FC = () => {
	return (
		<button className={cn(styles.wrapperSend, styles.wrapper)}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
			>
				<path
					d='M7 4L19 12L7 20V4Z'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
			<p>Начать тест</p>
		</button>
	)
}

export default ButtonStartTest
