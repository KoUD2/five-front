'use client'

import InfoEmpty from '@/components/ui/classes/info_empty/InfoEmpty'
import SearchClassComponent from '@/components/ui/classes/search_class/SearchClassComponent'
import SearchCreateTask from '@/components/ui/classes/search_create_task/SearchCreateTask'
import WrapperTasks from '@/components/ui/classes/wrapper_tasks/WrapperTasks'
import { UserGetService } from '@/services/user/userget.service'
import { useQuery } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

const SearchClass: FC = () => {
	const pathname = usePathname()
	const isAllClassesPage = pathname === '/main/classes'

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
		<WrapperTasks header={getHeaderText()} isAllClassesPage={isAllClassesPage}>
			<div>
				{isAllClassesPage && (
					<>
						{userRole?.includes('student') && (
							<InfoEmpty text='Вы не состоите ни в одном классе' />
						)}
						{userRole?.includes('teacher') && (
							<InfoEmpty text='У Вас нет ни одного класса' />
						)}
					</>
				)}

				{!isLoading && (
					<>
						{userRole?.includes('student') && <SearchClassComponent />}
						{userRole?.includes('teacher') && <SearchCreateTask />}
					</>
				)}
			</div>
		</WrapperTasks>
	)
}

export default SearchClass
