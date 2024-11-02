import { instance } from '@/api/axios'
import { getTask10Url } from '@/config/api.config'
import { API_URL } from '@/constants'
import { ITask10 } from '@/shared/types/tasks/task10.types'

export const Task10Service = {
	async getAll(_id: string | undefined) {
		const response = await instance.get<ITask10>(
			`${API_URL}${getTask10Url(`/${_id}`)}`
		)
		return response.data
	},
}
