'use client'

import { FC, useState } from 'react'
import styles from './Materials_page.module.scss'
import Content_page from './content-page/Content_page'
import Names from './names/Names'

const Materials_page: FC = () => {
	const [content, setContent] = useState('materials')

	return (
		<div className={styles.wrapper}>
			<Names setContent={setContent} content={content} />
			<Content_page content={content} />
		</div>
	)
}

export default Materials_page
