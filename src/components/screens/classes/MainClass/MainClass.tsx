'use client'

import InfoEmpty from '@/components/ui/classes/info_empty/InfoEmpty'
import SearchCreateTask from '@/components/ui/classes/search_create_task/SearchCreateTask'
import WrapperTasks from '@/components/ui/classes/wrapper_tasks/WrapperTasks'
import { UserGetService } from '@/services/user/userget.service'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

const MainClass: FC = () => {
	const { data: userRole, isLoading } = useQuery<string[]>({
		queryKey: ['user-role'],
		queryFn: () => UserGetService.getUserRole(),
	})

	const getHeaderText = () => {
		if (isLoading) return 'Загрузка...'
		if (userRole?.includes('teacher')) return 'Мои задания'
		if (userRole?.includes('student')) return 'Выберите класс'
		return 'Нет роли'
	}

	return (
		<WrapperTasks header={getHeaderText()}>
			<div>
				{userRole?.includes('student') && (
					<InfoEmpty text='Вы не состоите ни в одном классе' />
				)}
				{userRole?.includes('teacher') && <SearchCreateTask />}
			</div>
		</WrapperTasks>
	)
}

export default MainClass
