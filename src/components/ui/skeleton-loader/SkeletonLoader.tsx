import cn from 'classnames'
import { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './SkeletonLoader.module.scss'
const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
	return (
		<Skeleton
			{...rest}
			baseColor='#E6E6E6'
			highlightColor='#F4F4F4'
			className={cn(styles.card, className)}
		/>
	)
}

export default SkeletonLoader
