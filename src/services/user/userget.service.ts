import { instance } from '@/api/axios'
import { getUsersUrlHash } from '@/config/api.config'
import { API_URL } from '@/constants'
import { IUser } from '@/shared/types/types'

export const UserGetService = {
	async getUserRole() {
		const url = `${API_URL}/users/profile`
		const response = await instance.get<{ variant: string[] }>(url)
		return response.data.variant
	},

	async getById(userId: string | undefined) {
		const response = await instance.get<IUser>(
			`${API_URL}${getUsersUrlHash(`/${userId}`)}`
		)
		return response.data
	},
}
