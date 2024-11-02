import cn from 'classnames'
import { CalendarClock, Target, Tent } from 'lucide-react'
import { FC } from 'react'
import styles from './Module.module.scss'

const Module: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.modules}>
				<Target className={cn(styles.svg, styles.svg_now)} />
				<h2 className={styles.active}>Дедлайны</h2>
			</div>
			<div className={styles.modules}>
				<CalendarClock className={styles.svg} />
				<h2>События</h2>
			</div>
			<div className={styles.modules}>
				<Tent className={styles.svg} />
				<h2>Каникулы</h2>
			</div>
		</div>
	)
}

export default Module
