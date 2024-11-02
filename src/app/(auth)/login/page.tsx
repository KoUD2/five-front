import Login_page from '@/components/screens/auth/login/Login'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Login',
}

export default function LoginPage() {
	return <Login_page />
}
