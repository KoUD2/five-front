import cn from 'classnames'
import { FC } from 'react'

import styles from './Today_card.module.scss'

const Today_card: FC<{ className?: any }> = ({ className }) => {
	return (
		<div className={cn(styles.wrapper, className)}>
			<h2>Today</h2>
		</div>
	)
}

export default Today_card
