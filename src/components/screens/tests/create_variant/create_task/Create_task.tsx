import Button from '@/components/ui/top_bar/Button'
import { FC } from 'react'
import styles from './Create_task.module.scss'
const Create_task: FC = () => {
	return (
		<a href='test/create-variant' className={styles.wrapperA}>
			<Button className={styles.button}>
				<h1>Создать свой вариант</h1>
				<div className={styles.tasks}>
					<div className={styles.firstPart}>
						<div className={styles.round}>
							<div></div>
						</div>
						<div className={styles.audio}>
							<div></div>
							<div></div>
						</div>
					</div>
					<div className={styles.pleer}>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<div className={styles.futureButton}>
						<div></div>
					</div>
				</div>
			</Button>
		</a>
	)
}

export default Create_task
