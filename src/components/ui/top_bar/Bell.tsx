import Image from 'next/image'
import { FC } from 'react'

import bell from '@/shared/images/bell.svg'

import styles from './top_bar.module.scss'

const Bell: FC = () => {
	return (
		<div className={styles.bell}>
			<Image src={bell} alt="Уведомления" />
		</div>
	)
}

export default Bell
