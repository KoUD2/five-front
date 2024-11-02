import cn from 'classnames'
import { FC } from 'react'

import styles from './Theme.module.scss'

const Theme: FC<{ className?: any; className2: any; h2: string }> = ({
	className,
	className2,
	h2,
}) => {
	return (
		<div className={cn(styles.wrapper, className)}>
			<div className={styles.main_round}>
				<div className={cn(styles.inner_div, className2)}></div>
			</div>
			<h2>{h2}</h2>
		</div>
	)
}

export default Theme
