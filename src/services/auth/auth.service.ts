import { axiosClassic } from '@/api/axios'
import { IFormData } from '@/shared/types/types'
import { IUser } from '@/shared/types/user.types'
import { removeFromStorage, saveTokenStorage } from './auth.helper'

interface IAuthResponse {
	accessToken: string
	user: IUser
}

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken',
}

class AuthService {
	async main(
		type: 'login' | 'register',
		data: IFormData,
		token?: string | null
	) {
		const response = await axiosClassic.post<IAuthResponse>(
			`/auth/${type}`,
			data,
			{
				headers: {
					recaptcha: token,
				},
			}
		)
		const userName = response.data.response.user.name

		if (userName) {
			localStorage.setItem('userName', userName)
		}

		console.log(response.data)

		if (response.data.response.accessToken)
			saveTokenStorage(response.data.response.accessToken)

		return response
	}

	async getNewTokens() {
		const response =
			await axiosClassic.post<IAuthResponse>('/auth/access-token')

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	}

	async getNewTokensByRefresh(refreshToken: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			'/auth/access-token',
			{},
			{
				headers: {
					Cookie: `refreshToken=${refreshToken}`,
				},
			}
		)

		return response.data
	}

	async logout() {
		const response = await axiosClassic.post<boolean>('/auth/logout')

		if (response.data) removeFromStorage()

		return response
	}
}

export default new AuthService()
