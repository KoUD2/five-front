import { instance } from '@/api/axios'
import { getTask1Url } from '@/config/api.config'
import { API_URL } from '@/constants'
import { ITask1 } from '@/shared/types/tasks/task1.types'

export const Task1Service = {
	async getAll(_id: string | undefined) {
		// const url = `${API_URL}${getTask1Url(`/${_id}`)}`
		// console.log('Request URL:', url)
		// console.log(`/${_id}`)
		const response = await instance.get<ITask1>(
			`${API_URL}${getTask1Url(`/${_id}`)}`
		)
		return response.data
	},
}
