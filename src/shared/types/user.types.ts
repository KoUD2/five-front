import { UserRole } from '@/services/auth/auth.types'

export interface IUser {
	id: number
	email: string
	name: string
	password: string
	avatarPath?: string
	verificationToken?: string
	createdAt: string
	streak?: number
	messages?: string
	achievement?: []
	variant?: UserRole[]
}
