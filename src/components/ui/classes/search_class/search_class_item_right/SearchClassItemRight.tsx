import { removeSelectedClass } from '@/store/classSlice'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import SvgEmptyIcon from '../../form_create_class/svg_empty_icon/SvgEmptyIcon'
import styles from './SearchClassItemRight.module.scss'

interface SearchClassItemRightProps {
	name: string
	hashId: string
}

const SearchClassItemRight: FC<SearchClassItemRightProps> = ({
	name,
	hashId,
}) => {
	const dispatch = useDispatch()

	const handleDelete = () => {
		dispatch(removeSelectedClass(hashId))
	}

	return (
		<div className={styles.wrapper}>
			<div>
				<SvgEmptyIcon className={styles.svg} />
				<p>{name}</p>
			</div>
			<div className={styles.trashIcon} onClick={handleDelete}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='21'
					height='22'
					viewBox='0 0 21 22'
					fill='none'
				>
					<path
						d='M1.61523 5.5H19.7883'
						stroke='#EB5931'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M17.7694 5.5V19.25C17.7694 20.2321 16.7598 21.2143 15.7502 21.2143H5.654C4.64438 21.2143 3.63477 20.2321 3.63477 19.25V5.5'
						stroke='#EB5931'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M6.66357 5.49998V3.5357C6.66357 2.55355 7.67319 1.57141 8.68281 1.57141H12.7213C13.7309 1.57141 14.7405 2.55355 14.7405 3.5357V5.49998'
						stroke='#EB5931'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M8.68262 10.4107V16.3036'
						stroke='#EB5931'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M12.7212 10.4107V16.3036'
						stroke='#EB5931'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</div>
		</div>
	)
}

export default SearchClassItemRight
