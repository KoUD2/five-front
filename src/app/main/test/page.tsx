import Layout from '@/components/layout/Layout'
import Tests from '@/components/screens/tests/Tests'
import { NextPageAuth } from '@/shared/types/auth.types'

const TestsPage: NextPageAuth = () => {
	return (
		<Layout isLeft='true'>
			<Tests />
		</Layout>
	)
}

TestsPage.isOnlyUser = true
export default TestsPage
