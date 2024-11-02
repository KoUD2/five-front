import Layout from '@/components/layout/Layout'
import Materials_page from '@/components/screens/materials/Materials_page'
import { UserRole } from '@/services/auth/auth.types'
import { protectPage } from '@/utils/server/protect-page'

const MaterialsPage = async () => {
	await protectPage(UserRole.ADMIN)

	return (
		<Layout isLeft='false'>
			<Materials_page />
		</Layout>
	)
}

export default MaterialsPage
