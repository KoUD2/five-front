'use client'

import { FC } from 'react'

import styles from './Names.module.scss'
import { animation } from './animation_line'

const Names: FC<{ setContent: any; content: string }> = ({
	setContent,
	content,
}) => {
	animation(content)
	return (
		<>
			<div className={styles.wrapper}>
				<h1 onClick={() => setContent('materials')}>Учебные материалы</h1>
				<h1 onClick={() => setContent('books')}>Книги</h1>
				<h1 onClick={() => setContent('links')}>Ссылки</h1>
			</div>
			<div className={styles.under}>
				<div id="line"></div>
			</div>
		</>
	)
}

export default Names
