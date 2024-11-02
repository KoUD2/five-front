import Layout from '@/components/layout/Layout'
import SearchClass from '@/components/screens/classes/SearchClass/SearchClass'
import { NextPageAuth } from '@/shared/types/auth.types'

const SearchClassesPage: NextPageAuth = () => {
	return (
		<Layout isLeft='false'>
			<SearchClass />
		</Layout>
	)
}

// MaterialsPage.isOnlyUser = true
// Materials.isOnlyAdmin = true

export default SearchClassesPage
