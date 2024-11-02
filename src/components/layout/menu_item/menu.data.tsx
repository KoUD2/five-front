import {
	FileCheck,
	FilePlus2,
	LayoutGrid,
	LibraryBig,
	School,
	TrendingUp,
} from 'lucide-react'

import style from '@/components/layout/menu_item/Menu_main_items.module.scss'

import { IMenu } from './menu.types'

// const { data: userRole, isLoading } = useQuery<string[]>({
// 	queryKey: ['user-role'],
// 	queryFn: () => UserGetService.getUserRole(),
// })

// const pathClass = () => {
// 	if (userRole?.includes('student')) {
// 		return '/main/classes'
// 	} else if (userRole?.includes('teacher')) {
// 		return 'main/classes/search-class'
// 	}
// }

const firstMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: <LayoutGrid className={style.icons} />,
			link: '/main',
			title: 'Главная',
		},
		{
			icon: <FileCheck className={style.icons} />,
			link: '/main/test',
			title: 'Тесты',
		},
		{
			icon: <FilePlus2 className={style.icons} />,
			link: '/essay',
			title: 'Эссе',
		},
		{
			icon: <TrendingUp className={style.icons} />,
			link: '/analytics',
			title: 'Аналитика',
		},
		{
			icon: <School className={style.icons} />,
			link: '/main/classes',
			title: 'Классы',
		},
		{
			icon: <LibraryBig className={style.icons} />,
			link: '/main/materials',
			title: 'Материалы',
		},
	],
}

const userMenu: IMenu = {
	title: 'General',
	items: [],
}

export const menus: IMenu[] = [firstMenu, userMenu]
