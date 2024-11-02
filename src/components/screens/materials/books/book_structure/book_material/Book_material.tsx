'use client'

import { FC } from 'react'

import Button from '@/components/ui/top_bar/Button'

import styles from './Book_material.module.scss'

const Book_material: FC<{ h1: string }> = ({ h1 }) => {
	return (
		<div className={styles.wrapper}>
			<h1>{h1}</h1>
			<Button className={styles.button}>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'>
					<path
						d='M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15'
						stroke='white'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M7 10L12 15L17 10'
						stroke='white'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M12 15V3'
						stroke='white'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</Button>
		</div>
	)
}

export default Book_material
