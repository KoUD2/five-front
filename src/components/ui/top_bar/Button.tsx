'use client'

import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

import { IButton } from './top_bar.interface'
import styles from './top_bar.module.scss'

const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className={cn(styles.button, className)} {...rest}>
			{children}
		</button>
	)
}

export default Button
