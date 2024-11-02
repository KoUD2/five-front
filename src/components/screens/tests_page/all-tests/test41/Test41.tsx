import { FC } from 'react'
import styles from './Test41.module.scss'
const Test41: FC = () => {
	return (
		<div className={styles.mainWrapper}>
			<div className={styles.numTask}>
				<h1>41</h1>
			</div>
			<div className={styles.mainContent}>
				<div className={styles.textAudio}>
					<h1>
						You are going to give an interview. You have to answer five
						questions. Give full answers to the questions (2−3 sentences).
						Remember that you have 40 seconds to answer each question.
					</h1>
					<div className={styles.recording}></div>
				</div>
				<div className={styles.audio}></div>
			</div>
		</div>
	)
}

export default Test41
