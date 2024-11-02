import { ListFilter, Search } from 'lucide-react'
import { FC } from 'react'

import styles from './Search.module.scss'
const Search_my: FC<{ onChange: any }> = ({ onChange }) => {
	const handleChange = (event: any) => {
		onChange(event.target.value) // callback-функция
	}
	return (
		<div className={styles.wrapper}>
			<Search className={styles.svg} />
			<input
				type='text'
				className={styles.input}
				placeholder='Поиск по тегу или событию...'
				onChange={handleChange}
			/>
			<div className={styles.line}></div>
			<ListFilter className={styles.lines} />
		</div>
	)
}
export default Search_my
