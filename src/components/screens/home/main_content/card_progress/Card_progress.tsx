import { FC } from 'react'

import styles from './Card_progress.module.scss'

const Card_progress: FC = () => {
	return (
		<div className={styles.wrapper}>
			<h2>Прогресс обучения:</h2>
			<div>
				<h2>32%</h2>
				<div>
					<div></div>
				</div>
			</div>
		</div>
	)
}

export default Card_progress
