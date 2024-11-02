export enum UserRole {
	USER = 'USER',
	TEACHER = 'TEACHER',
	STUDENT = 'STUDENT',
	ADMIN = 'ADMIN',
}

export interface ITokenInside {
	id: number
	variant: UserRole[]
	iat: number
	exp: number
}

export type TProtectUserData = Omit<ITokenInside, 'iat' | 'exp'>
