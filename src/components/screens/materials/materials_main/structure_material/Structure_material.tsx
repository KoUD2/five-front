import { FC, useEffect, useState } from 'react'

import styles from './Structure_material.module.scss'
import Block_material from './block_material/Block_material'

const Structure_material: FC<{ materials: any; title2: string }> = ({
	materials,
	title2,
}) => {
	const [content, setContent] = useState('')
	const [yearMy, setYear] = useState('')
	const [arrayMy, setArray] = useState('')

	function findObjectsWithSameMonthAndYear(
		materials: any,
		content: string,
		yearMy: string
	) {
		return materials.filter(obj => {
			const [month, year] = obj.time.split(' ')
			return month === content && year === yearMy
		})
	}
	useEffect(() => {
		const uniqueMonthsAndYears = [...new Set(materials.map(obj => obj.time))]
		uniqueMonthsAndYears.forEach(monthAndYear => {
			const content = monthAndYear.split(' ')[0]
			const yearMy = monthAndYear.split(' ')[1]
			setContent(content)
			setYear(yearMy)
			const arrayMy = findObjectsWithSameMonthAndYear(
				materials,
				content,
				yearMy
			)

			setArray(arrayMy)
		})
	}, [])

	return (
		<div className={styles.wrapper}>
			<div>
				<h2>{title2}</h2>
			</div>
			<div className={styles.content}>
				{materials.map(material => (
					<Block_material key={material._id} material={material} />
				))}
			</div>
		</div>
	)
}

export default Structure_material
