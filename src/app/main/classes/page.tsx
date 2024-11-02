import Layout from '@/components/layout/Layout'
import MainClass from '@/components/screens/classes/MainClass/MainClass'
import { NextPageAuth } from '@/shared/types/auth.types'

const ClassesPage: NextPageAuth = () => {
	return (
		<Layout isLeft='false'>
			<MainClass />
		</Layout>
	)
}

// MaterialsPage.isOnlyUser = true
// Materials.isOnlyAdmin = true

export default ClassesPage
