import Layout from '@/components/layout/Layout'
import CreateClass from '@/components/screens/classes/CreateClass/CreateClass'
import { NextPageAuth } from '@/shared/types/auth.types'

const CreateClassesPage: NextPageAuth = () => {
	return (
		<Layout isLeft='false'>
			<CreateClass />
		</Layout>
	)
}

// MaterialsPage.isOnlyUser = true
// Materials.isOnlyAdmin = true

export default CreateClassesPage
