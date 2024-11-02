import { instance } from '@/api/axios'
import { getTask3Url } from '@/config/api.config'
import { API_URL } from '@/constants'
import { ITask3 } from '@/shared/types/tasks/task3.types'

export const Task3Service = {
	async getAll(_id: string | undefined, number: string) {
		const response = await instance.get<ITask3>(
			`${API_URL}${getTask3Url(number, `${_id}`)}`
		)
		return response.data
	},
}
