import cn from 'classnames'
import { FC } from 'react'

import styles from './Progress_cards.module.scss'

const Waiting_card: FC<{ className?: any }> = ({ className }) => {
	return (
		<div className={cn(styles.waiting, className)}>
			<h2>Waiting Feedback</h2>
		</div>
	)
}

export default Waiting_card
