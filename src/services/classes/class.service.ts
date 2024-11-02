import { instance } from '@/api/axios'
import { getClassUrl, postClass } from '@/config/api.config'
import { API_URL } from '@/constants'
import { IClass } from '@/shared/types/class/class.types'

export const ClassService = {
	async getById(_id: string | undefined) {
		const response = await instance.get<IClass>(
			`${API_URL}${getClassUrl(`/${_id}`)}`
		)
		return response.data
	},

	async createClass(classData: {
		name: string
		description: string
		students: string[]
	}) {
		const response = await instance.post<IClass>(
			`${API_URL}${postClass('')}`, // Adjust the URL if necessary
			classData // Pass classData in the POST request body
		)
		return response.data
	},
}
