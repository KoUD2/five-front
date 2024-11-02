import Image from 'next/image'
import { FC } from 'react'

import glass from '@/shared/images/glass.svg'

import styles from './top_bar.module.scss'

const Glass: FC = () => {
	return (
		<div className={styles.glass}>
			<Image src={glass} alt="Поиск" />
		</div>
	)
}

export default Glass
