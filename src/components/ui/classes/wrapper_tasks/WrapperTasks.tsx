'use client'

import { UserGetService } from '@/services/user/userget.service'
import { useQuery } from '@tanstack/react-query'
import { FC, ReactNode } from 'react'
import RightBar from '../right_bar/RightBar'
import styles from './WrapperTasks.module.scss'

interface WrapperTasksProps {
	children: ReactNode
	header?: string
	isAllClassesPage?: boolean
}

const WrapperTasks: FC<WrapperTasksProps> = ({
	children,
	header,
	isAllClassesPage,
}) => {
	const { data: userRole, isLoading } = useQuery<string[]>({
		queryKey: ['user-role'],
		queryFn: () => UserGetService.getUserRole(),
		enabled: !header,
	})

	const getHeaderText = () => {
		if (isLoading) return 'Загрузка...'
		if (userRole?.includes('teacher')) return 'Мои задания'
		if (userRole?.includes('student')) return 'Выданные задания'
		return 'Нет роли'
	}

	const finalHeader = header || getHeaderText()

	return (
		<div className={styles.wrapper}>
			<div className={styles.tasks}>
				<h1>{finalHeader}</h1>
				<div className={styles.line}></div>

				{children}
			</div>
			<RightBar userRole={userRole} />
		</div>
	)
}

export default WrapperTasks
