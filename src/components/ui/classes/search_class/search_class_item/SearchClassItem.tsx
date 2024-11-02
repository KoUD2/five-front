import { IClass } from '@/shared/types/class/class.types'
import { FC } from 'react'
import SvgEmptyIcon from '../../form_create_class/svg_empty_icon/SvgEmptyIcon'
import SvgEmptyIconStudent from '../../form_create_class/svg_empty_icon/SvgEmptyIconStudent'
import styles from './SearchClassItem.module.scss'

interface SearchClassItemProps {
	classData: IClass
	onSelect: (classData: IClass) => void
}

const SearchClassItem: FC<SearchClassItemProps> = ({ classData, onSelect }) => {
	return (
		<div className={styles.wrapper} onClick={() => onSelect(classData)}>
			<div className={styles.nameClass}>
				<div>
					<SvgEmptyIcon className={styles.svg} />
					<p>{classData.name}</p>
				</div>
				<p>#{classData.hashId}</p>
			</div>
			<div className={styles.wrapperCount}>
				<div>
					{classData.students
						?.slice(0, 5)
						.map((_, index) => (
							<SvgEmptyIconStudent key={index} className={styles.svg} />
						))}
				</div>
				<p>{classData.students?.length} учеников</p>
			</div>
		</div>
	)
}

export default SearchClassItem
