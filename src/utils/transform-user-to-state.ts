import { type TProtectUserData, UserRole } from '@/services/auth/auth.types'

export type TUserDataState = {
	id: number
	variant: UserRole[]
	isLoggedIn: boolean
	isAdmin: boolean
	isTeacher: boolean
	isStudent: boolean
}

export const transformUserToState = (
	user: TProtectUserData
): TUserDataState | null => {
	return {
		...user,
		isLoggedIn: true,
		isAdmin: user.variant.includes(UserRole.ADMIN),
		isTeacher: user.variant.includes(UserRole.TEACHER),
		isStudent: user.variant.includes(UserRole.STUDENT),
	}
}
