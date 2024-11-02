import Image from 'next/image'
import { FC } from 'react'

import timer from '@/shared/images/timer.svg'

import styles from './Progress_cards.module.scss'

const Continue_card: FC = () => {
	return (
		<div className={styles.div}>
			<Image src={timer} alt="Картинка в процессе" />
			<h2>In Progress</h2>
		</div>
	)
}

export default Continue_card
