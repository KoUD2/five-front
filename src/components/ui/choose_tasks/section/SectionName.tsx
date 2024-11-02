import { FC } from 'react'
import styles from './SectionName.module.scss'

const SectionName: FC<{ h1: string }> = ({ h1 }) => {
	return (
		<div className={styles.wrapper}>
			<h1>{h1}</h1>
		</div>
	)
}

export default SectionName
