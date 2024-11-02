// import axios, { axiosClassic } from 'api/interceptors'

// // import { IProfileInput } from '@/screens/profile/profile.interface'

// import { getUsersUrl } from '@/config/api.config'
// import { IMaterial } from '@/shared/types/materials.types'
// import { IUser } from '@/shared/types/user.types'

// export const UserService = {
// 	async getProfile() {
// 		return axios.get<IUser>(getUsersUrl('/profile'))
// 	},

// 	// async updateProfile(data: IProfileInput) {
// 	// 	return axios.put<string>(getUsersUrl('/profile'), data)
// 	// },

// 	async getUsers(searchTerm?: string) {
// 		return axios.get<IUser[]>(getUsersUrl(``), {
// 			params: searchTerm
// 				? {
// 						searchTerm,
// 					}
// 				: {},
// 		})
// 	},

// 	async getUser(_id: string) {
// 		return axios.get<IUser>(getUsersUrl(`/${_id}`))
// 	},

// 	// async updateUser(_id: string, data: IProfileInput) {
// 	// 	return axios.put<string>(getUsersUrl(`/${_id}`), data)
// 	// },

// 	async deleteUser(_id: string) {
// 		return axios.delete<string>(getUsersUrl(`/${_id}`))
// 	},

// 	async getMaterials() {
// 		return axiosClassic.get<IMaterial[]>('/materials')
// 	},

// 	async toggleFavorite(movieId: string) {
// 		return axios.post(getUsersUrl('/profile/favorites'), {
// 			movieId,
// 		})
// 	},
// }

import { instance } from '@/api/axios'
import { API_URL } from '@/constants'
import { IMaterial } from '@/shared/types/materials.types'

class UserService {
	// private _BASE_URL = '/users'

	// async fetchProfile() {
	// 	return instance.get<IUser>(`${this._BASE_URL}/profile`)
	// }

	// async fetchPremium() {
	// 	return instance.get<{ text: string }>(`${this._BASE_URL}/premium`)
	// }

	// async fetchManagerContent() {
	// 	return instance.get<{ text: string }>(`${this._BASE_URL}/manager`)
	// }

	// async fetchList() {
	// 	return instance.get<IUser[]>(`${this._BASE_URL}/list`)
	// }

	async getMaterials() {
		return instance.get<IMaterial[]>(`${API_URL}/materials`)
	}
}

export default new UserService()
