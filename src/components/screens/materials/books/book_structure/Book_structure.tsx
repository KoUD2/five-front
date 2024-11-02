import { FC } from 'react'

import styles from './Book_structure.module.scss'
import Book_material from './book_material/Book_material'

const Book_structure: FC<{ h1: string }> = ({ h1 }) => {
	return (
		<div className={styles.container}>
			<h1>{h1}</h1>
			<div className={styles.wrapper}>
				<Book_material h1="The Curious Incident of the Dog in the Night" />
				<Book_material h1="Nine Lives to Die" />
				<Book_material h1="The Million Pound Bank Note" />
				<Book_material h1="Mr. Bean In Town" />
				<Book_material h1="Appointment With Death" />
			</div>
		</div>
	)
}

export default Book_structure
