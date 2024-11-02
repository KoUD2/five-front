import cn from 'classnames'
import { FC } from 'react'

import Button from '@/components/ui/top_bar/Button'

import styles from './Deadline_card.module.scss'

const Deadline_card: FC<{
	link: string
	className: any
	className2: any
	className3: any
	className4: any
	className5: any
	className6: any
	name: string
	time: string
	done: string
	children: any
}> = ({
	link,
	name,
	time,
	done,
	children,
	className,
	className2,
	className3,
	className6,
}) => {
	return (
		<div className={cn(styles.wrapper, className)}>
			<div>
				<div>
					<h2 className={cn(styles.h2, className2)}>{name}</h2>
					<h2 className={cn(styles.timing, className3)}>{time}</h2>
				</div>
			</div>
			<div className={styles.under}>
				<a href={link} className={styles.a}>
					<Button className={className6}>{done}</Button>
				</a>
				{children}
			</div>
		</div>
	)
}

export default Deadline_card
