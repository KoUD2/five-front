'use client'

import cn from 'classnames'
import { FC } from 'react'

import style from './Menu_item.module.scss'
import { IMenuItem } from './menu.types'

const Menu_item: FC<{ item: IMenuItem }> = ({ item }) => {
	return (
		<div className={cn(style.menu_item, item.title)}>
			<div></div>
			<a href={item.link}>
				<div>
					{item.icon}
					<h1>{item.title}</h1>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 7 12'
						fill='none'
						className={style.svg}
					>
						<path
							d='M6.89624 5.6566C6.89624 5.50624 6.83922 5.38179 6.73032 5.27811L1.40039 0.150359C1.30188 0.0518478 1.17745 0 1.03227 0C0.741926 0 0.513794 0.217761 0.513794 0.513293C0.513794 0.653283 0.570825 0.782902 0.664156 0.876228L5.63116 5.6566L0.664156 10.4318C0.570825 10.5251 0.513794 10.6495 0.513794 10.7947C0.513794 11.0903 0.741926 11.3132 1.03227 11.3132C1.17745 11.3132 1.30188 11.2562 1.40039 11.1628L6.73032 6.03509C6.83922 5.9262 6.89624 5.80175 6.89624 5.6566Z'
							fill='black'
							fillOpacity='0.85'
						/>
					</svg>
				</div>
			</a>
		</div>
	)
}

export default Menu_item
