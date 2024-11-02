import Button from '@/components/ui/top_bar/Button'
import { FC } from 'react'
import styles from './Choose_task.module.scss'
const Choose_task: FC = () => {
	return (
		<a href='test/choose-task' className={styles.wrapperA}>
			<Button className={styles.button}>
				<h1>Выбрать задания</h1>
				<div className={styles.tasks}>
					<div className={styles.task}>
						<div className={styles.number}></div>
						<div className={styles.mainContent}>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<div className={styles.timer}>
							<div></div>
							<div></div>
						</div>
					</div>
					<div className={styles.task}>
						<div className={styles.number}></div>
						<div className={styles.mainContent}>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<div className={styles.timer}>
							<div></div>
							<div></div>
						</div>
					</div>
					<div className={styles.task}>
						<div className={styles.number}></div>
						<div className={styles.mainContent}>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<div className={styles.timer}>
							<div></div>
							<div></div>
						</div>
					</div>
				</div>
			</Button>
		</a>
	)
}

export default Choose_task
