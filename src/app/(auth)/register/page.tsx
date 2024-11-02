import Registration from '@/components/screens/auth/register/Registration'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Register',
}

export default function RegisterPage() {
	return <Registration />
}
