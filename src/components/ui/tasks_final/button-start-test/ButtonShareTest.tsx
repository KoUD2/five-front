import cn from 'classnames'
import { FC } from 'react'
import styles from './ButtonStartTest.module.scss'

const ButtonShareTest: FC = () => {
	return (
		<button className={cn(styles.wrapperShare, styles.wrapper)}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
			>
				<path
					d='M15 17L20 12L15 7'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M4 18V16C4 14.9391 4.42143 13.9217 5.17157 13.1716C5.92172 12.4214 6.93913 12 8 12H20'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
			<p>Отправить тест</p>
		</button>
	)
}

export default ButtonShareTest
