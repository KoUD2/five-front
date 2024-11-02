import { PlusSquare } from 'lucide-react'
import { FC } from 'react'
import styles from './Create_variant.module.scss'
import Choose_task from './choose_task/Choose_task'
import Create_task from './create_task/Create_task'
const Create_variant: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.buttonHeader}>
				<div className={styles.header}>
					<PlusSquare />
					<h1>Собрать свой вариант</h1>
				</div>
			</div>
			<div className={styles.line}></div>
			<div className={styles.cards}>
				<Choose_task />
				<Create_task />
			</div>
		</div>
	)
}

export default Create_variant
