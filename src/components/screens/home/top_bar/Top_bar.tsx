'use client'

import Button from '@/components/ui/top_bar/Button'
import { Bell, Search } from 'lucide-react'
import { FC, useEffect, useState } from 'react'

import styles from './Top_bar.module.scss'

const Top_bar: FC<{ isLeft: string }> = ({ isLeft }) => {
	const [userName, setUserName] = useState<string | null>(null)

	useEffect(() => {
		const storedUserName = localStorage.getItem('userName')
		setUserName(storedUserName)
	}, [])
	return (
		<div className={styles.container}>
			{isLeft === 'true' ? (
				<div className={styles.greeting}>
					<h1>Добро пожаловать,</h1>
					<h2>{userName}</h2>
				</div>
			) : null}

			<div className={styles.wrapper}>
				<Search className={styles.icons} />
				<Bell className={styles.icons} id='bell' />
				<Button className={styles.button}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 25 24'
						fill='none'
						className={styles.svg_plus}
					>
						<path
							d='M5.59619 12H19.5962'
							stroke='white'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M12.5962 5V19'
							stroke='white'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>

					<h1>Запросить тест</h1>
				</Button>
			</div>
		</div>
	)
}

export default Top_bar
