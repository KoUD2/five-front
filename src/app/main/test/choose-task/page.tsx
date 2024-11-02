import Layout from '@/components/layout/Layout'
import Choose_task_page from '@/components/screens/tests/choose_task/Choose_task_page'
import { NextPageAuth } from '@/shared/types/auth.types'

const ChooseTaskPage: NextPageAuth = () => {
	return (
		<Layout isLeft='true'>
			<Choose_task_page />
		</Layout>
	)
}

ChooseTaskPage.isOnlyUser = true
export default ChooseTaskPage
