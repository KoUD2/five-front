import { FC } from 'react'

import styles from './Main.module.scss'
import Main_content from './main_content/Main_content'
import Notifications from './notifications/Notifications'

const Main: FC = () => {
	return (
		<div className={styles.container}>
			<Main_content />
			<Notifications />
		</div>
	)
}

export default Main
