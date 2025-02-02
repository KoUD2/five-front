import { UserRole } from '@/services/auth/auth.types'

export interface IUser {
	id: number
	name?: string
	email: string
	avatarPath?: string
	verificationToken?: string
	hashId: string
	rights: UserRole[]
}

export interface IFormData extends Pick<IUser, 'email'> {
	password: string
	name: string
}
