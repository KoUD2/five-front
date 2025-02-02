import cn from 'classnames'
import { FC } from 'react'
import styles from './SvgEmptyIcon.module.scss'

const SvgEmptyIconStudent: FC<{ className?: any }> = ({ className }) => {
	return (
		<div className={cn(styles.wrapper, className, styles.wrapperIcon)}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
				<circle cx='12' cy='7' r='4' />
			</svg>
		</div>
	)
}

export default SvgEmptyIconStudent
