import cn from 'classnames'
import { FC } from 'react'

import styles from './Date.module.scss'

const Date: FC<{
	date_name: string
	date_num: string
	className?: any
	className2?: any
}> = ({ date_name, date_num, className, className2 }) => {
	return (
		<div className={cn(styles.wrapper, className2)}>
			<h2 className={cn(styles.date_name, className)}>{date_name}</h2>
			<h2 className={cn(styles.date_num, className)}>{date_num}</h2>
		</div>
	)
}

export default Date
