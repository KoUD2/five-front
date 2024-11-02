'use client'

import Image from 'next/image'
import { FC } from 'react'

import arrow from '@/shared/images/chevron_forward.svg'

import Button from '@/components/ui/top_bar/Button'

import styles from './Card_collection.module.scss'
import { animation_hover_color } from './animation_hover_color'

const Card_collection: FC<{
	className: any
	children: any
	children2?: any
	src: string
	alt: string
	h2: string
}> = ({ className, children2, h2, children }) => {
	animation_hover_color()
	return (
		<div className={`${styles.wrapper} ${className}`}>
			<div className={styles.top_container}>
				<div>
					{children2}
					<h2>{h2}</h2>
				</div>
				<Button className={styles.button}>
					См все
					<Image src={arrow} alt={'Кнопка "Смотреть всё"'} draggable='false' />
				</Button>
			</div>
			<div className={styles.under}></div>
			{children}
		</div>
	)
}

export default Card_collection
