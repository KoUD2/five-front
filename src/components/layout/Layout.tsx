// 'use client'
import cn from 'classnames'
import { FC } from 'react'

import Logo from '@/components/ui/logo_section/Logo'
import { menus } from '../layout/menu_item/menu.data'
import Top_bar from '../screens/home/top_bar/Top_bar'

import styles from './Layout.module.scss'
import Account from './account/Account'
import Menu_main_items from './menu_item/Menu_main_items'
import Themes from './themes/Themes'

const Layout: FC<{ children: any; isLeft: string }> = ({
	children,
	isLeft,
}) => {
	return (
		<div className={styles.main_wrapper}>
			<div className={styles.wrapper}>
				<Logo className={styles.logo} />
				<div>
					<h2 className={cn(styles.tag1, styles.top)}>основное</h2>
					<Menu_main_items menu={menus[0]} />
					<h2 className={cn(styles.tag1, styles.top2)}>темы</h2>
					<Themes />
					<h2 className={cn(styles.tag1, styles.top3)}>аккаунт</h2>
					<Account />
				</div>
			</div>
			<div className={styles.second_wrapper}>
				<Top_bar isLeft={isLeft} />
				{children}
			</div>
		</div>
	)
}

export default Layout
