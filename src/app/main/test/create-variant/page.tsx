import Layout from '@/components/layout/Layout'
import Create_task_page from '@/components/screens/tests/create_tasks/CreateTasks'
import { NextPageAuth } from '@/shared/types/auth.types'

const ChooseTaskPage: NextPageAuth = () => {
	return (
		<Layout isLeft='true'>
			<Create_task_page />
		</Layout>
	)
}

ChooseTaskPage.isOnlyUser = true
export default ChooseTaskPage
