import { FC } from 'react'

import styles from './Links_structure.module.scss'
import Links_material from './links_material/Links_material'

const Links_structure: FC<{ h1: string }> = ({ h1 }) => {
	return (
		<div className={styles.container}>
			<h1>{h1}</h1>
			<div className={styles.wrapper}>
				<Links_material h1="ФИПИ: Тренировочные варианты 2021" />
				<Links_material h1="Решу ЕГЭ: тренировочный вариант говорения" />
				<Links_material h1="Топ 100 слов, которые должен знать каждый" />
				<Links_material h1="Яндекс. Репетитор" />
				<Links_material h1="Грамматика и пунтуация " />
				<Links_material h1="Лучшая зарубежная литература" />
			</div>
		</div>
	)
}

export default Links_structure
