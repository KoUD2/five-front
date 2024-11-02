import cn from 'classnames'
import { FC } from 'react'
import styles from './InfoEmptyMini.module.scss'

const InfoEmptyMini: FC<{ text: string; className?: any }> = ({
	text,
	className,
}) => {
	return (
		<div className={cn(styles.wrapper, className)}>
			<p>{text}</p>
		</div>
	)
}

export default InfoEmptyMini
