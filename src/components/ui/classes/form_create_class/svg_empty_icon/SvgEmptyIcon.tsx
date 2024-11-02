import cn from 'classnames'
import { FC } from 'react'
import styles from './SvgEmptyIcon.module.scss'

const SvgEmptyIcon: FC<{ className?: any }> = ({ className }) => {
	return (
		<div className={cn(styles.wrapper, className)}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='30'
				height='30'
				viewBox='0 0 30 30'
				fill='none'
			>
				<path
					d='M22.5 26.25C22.5 23.5978 21.4464 21.0543 19.5711 19.1789C17.6957 17.3036 15.1522 16.25 12.5 16.25C9.84784 16.25 7.3043 17.3036 5.42893 19.1789C3.55357 21.0543 2.5 23.5978 2.5 26.25'
					stroke='#6D6D6D'
					strokeWidth='2.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M12.5 16.25C15.9518 16.25 18.75 13.4518 18.75 10C18.75 6.54822 15.9518 3.75 12.5 3.75C9.04822 3.75 6.25 6.54822 6.25 10C6.25 13.4518 9.04822 16.25 12.5 16.25Z'
					stroke='#6D6D6D'
					strokeWidth='2.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M27.5001 25.0005C27.5001 20.788 25.0001 16.8755 22.5001 15.0005C23.3218 14.384 23.979 13.5743 24.4133 12.6433C24.8476 11.7123 25.0457 10.6886 24.9901 9.66274C24.9345 8.6369 24.6268 7.6406 24.0944 6.76199C23.562 5.88338 22.8212 5.14957 21.9376 4.62549'
					stroke='#6D6D6D'
					strokeWidth='2.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</div>
	)
}

export default SvgEmptyIcon
