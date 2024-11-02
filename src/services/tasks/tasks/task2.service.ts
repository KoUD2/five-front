import { instance } from '@/api/axios'
import { getTask2Url } from '@/config/api.config'
import { API_URL } from '@/constants'
import { ITask1 } from '@/shared/types/tasks/task1.types'

export const Task2Service = {
	async getAll(_id: string | undefined) {
		const response = await instance.get<ITask1>(
			`${API_URL}${getTask2Url(`/${_id}`)}`
		)
		return response.data
	},
}
