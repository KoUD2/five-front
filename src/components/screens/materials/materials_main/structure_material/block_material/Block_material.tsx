'use client'

import { FC } from 'react'

import Button from '@/components/ui/top_bar/Button'

import styles from './Block_material.module.scss'
import { IWidgetMaterial } from './material.type'

const Block_material: FC<{ material: IWidgetMaterial }> = ({ material }) => {
	return (
		<div className={styles.wrapper}>
			<h1>{material.title}</h1>
			<p>{material.text}</p>
			<Button className={styles.button}>Скачать материалы</Button>
		</div>
	)
}

export default Block_material
