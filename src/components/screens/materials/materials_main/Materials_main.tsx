'use client'

import { FC, useEffect, useState } from 'react'

import { useMaterials } from '@/shared/types/useMaterials'
import styles from './Materials_main.module.scss'
import Structure_material from './structure_material/Structure_material'

const Materials_main: FC = () => {
	const [arrayMy, setArray] = useState<string[]>([])
	const { isLoading, materials } = useMaterials()

	useEffect(() => {
		const uniqueMonthsAndYears = Array.from(
			new Set(materials?.data.map(obj => obj.time))
		)
		setArray(uniqueMonthsAndYears)
	}, [materials])

	let Material = materials?.data.filter(item => {
		return item.time.includes('Февраль 2024')
	})

	console.log(Material)

	return isLoading ? (
		<div>Загрузка...</div>
	) : (
		<div className={styles.wrapper}>
			{arrayMy.map((item, index) => (
				<Structure_material key={index} title2={item} materials={Material} />
			))}
		</div>
	)
}

export default Materials_main
