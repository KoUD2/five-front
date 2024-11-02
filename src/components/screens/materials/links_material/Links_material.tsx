import { FC } from 'react'

import styles from './Links_material.module.scss'
import Links_structure from './links_structure/Links_structure'

const Links_material: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Links_structure h1="Ноябрь 2023" />
			<Links_structure h1="Октябрь 2023" />
		</div>
	)
}

export default Links_material
