import { Info, UserRound } from 'lucide-react'
import { FC } from 'react'

import style from '@/components/layout/menu_item/Menu_main_items.module.scss'

import styles from './Account.module.scss'

const Account: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.step}>
				<UserRound className={style.icons} />
				<h2>Профиль</h2>
			</div>
			<div className={styles.step}>
				<Info className={style.icons} />
				<h2>Поддержка</h2>
			</div>
			<div className={styles.step}></div>
		</div>
	)
}

export default Account
