import { IUser } from '@/shared/types/types'
import { FC } from 'react'
import styles from './SearchUserItem.module.scss'

interface SearchUserItemProps {
	userData: IUser
	onSelect: (userData: IUser) => void
}

const SearchUserItem: FC<SearchUserItemProps> = ({ userData, onSelect }) => {
	return (
		<div onClick={() => onSelect(userData)} className={styles.wrapper}>
			<div>
				<div className={styles.logo}></div>
				<p>{userData.name}</p>
			</div>
			<p>#{userData.hashId}</p>
		</div>
	)
}

export default SearchUserItem
