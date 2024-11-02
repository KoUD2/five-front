import { FC } from 'react'

import styles from './Books.module.scss'
import Book_structure from './book_structure/Book_structure'

const Books: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Book_structure h1="Ноябрь 2023" />
			<Book_structure h1="Октябрь 2023" />
		</div>
	)
}

export default Books
