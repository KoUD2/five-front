import { FC } from 'react'

import styles from './Themes.module.scss'
import Theme from './theme/Theme'

const Themes: FC = () => {
	return (
		<div>
			<Theme className={styles.div_first} className2={styles.first} h2="ЕГЭ" />
		</div>
	)
}

export default Themes
