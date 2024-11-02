'use client'

import { FC } from 'react'

import Menu_item from './Menu_item'
import styles from './Menu_main_items.module.scss'
import { animation_color } from './animation_color'
import { IMenu } from './menu.types'

const Menu_main_items: FC<{ menu: IMenu }> = ({ menu: { items } }) => {
	animation_color()
	return (
		<div className={styles.wrapper}>
			<ul className={styles.ul}>
				{items.map((item) => (
					<Menu_item key={item.link} item={item} />
				))}
			</ul>
		</div>
	)
}

export default Menu_main_items
