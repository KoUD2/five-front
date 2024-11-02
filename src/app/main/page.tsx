import Layout from '@/components/layout/Layout'
import Main from '@/components/screens/home/Main'
import { protectPage } from '@/utils/server/protect-page'

const MainPage = async () => {
	await protectPage()

	return (
		<Layout isLeft='true'>
			<Main />
		</Layout>
	)
}

export default MainPage
