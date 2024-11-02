import cn from 'classnames'
import { FC } from 'react'

import styles from './Subject.module.scss'

const Subject: FC<{ h2: string; className: any }> = ({ h2, className }) => {
	return (
		<div className={cn(styles.wrapper, className)}>
			<h2>{h2}</h2>
		</div>
	)
}

export default Subject
