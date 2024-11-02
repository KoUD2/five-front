import cn from 'classnames'
import { FC } from 'react'
import styles from './InfoEmpty.module.scss'

const InfoEmpty: FC<{ text: string; className?: any }> = ({
	text,
	className,
}) => {
	return (
		<div className={cn(styles.wrapper, className)}>
			<p>{text}</p>
		</div>
	)
}

export default InfoEmpty
