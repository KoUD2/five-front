'use client'

import { RootState } from '@/store/rootReducer'
import { CalendarCheck } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import ButtonInvitationClass from '../button_invitation_class/ButtonInvitationClass'
import ButtonNewClass from '../button_new_class/ButtonNewClass'
import ButtonTeacherNewClass from '../button_teacher_new_class/ButtonTeacherNewClass'
import InfoEmptyMini from '../info_empty_mini/InfoEmptyMini'
import SearchClassItemRight from '../search_class/search_class_item_right/SearchClassItemRight'
import styles from './RightBar.module.scss'

const RightBar: FC<{ userRole: string[] | undefined }> = ({ userRole }) => {
	const selectedClasses = useSelector(
		(state: RootState) => state.class.selectedClasses
	)

	const pathname = usePathname()

	const isSearchClassPage = pathname === '/main/classes/search-class'
	const isAllClassesPage = pathname === '/main/classes'

	return (
		<div className={styles.myClasses}>
			<div className={styles.wrapperHeader}>
				<CalendarCheck strokeWidth={2} className={styles.calendar} />
				<h2>Мои классы</h2>
			</div>

			{isAllClassesPage && (
				<>
					{userRole?.includes('student') && (
						<InfoEmptyMini text='Вы не состоите ни в одном классе' />
					)}
					{userRole?.includes('teacher') && (
						<InfoEmptyMini text='У Вас нет ни в одного класса' />
					)}
				</>
			)}

			{isSearchClassPage && (
				<>
					<div className={styles.wrapperItems}>
						{selectedClasses.length > 0 ? (
							selectedClasses.map(cls => (
								<SearchClassItemRight
									key={cls.hashId}
									hashId={cls.hashId}
									name={cls.name}
								/>
							))
						) : (
							<InfoEmptyMini text='Вы не состоите ни в одном классе' />
						)}
					</div>
					<ButtonInvitationClass className={styles.buttonSend} />
				</>
			)}
			{isAllClassesPage && (
				<>
					{userRole?.includes('student') && (
						<ButtonNewClass className={styles.button} title='Добавить класс' />
					)}
					{userRole?.includes('teacher') && (
						<ButtonTeacherNewClass className={styles.button} />
					)}
				</>
			)}
		</div>
	)
}

export default RightBar
