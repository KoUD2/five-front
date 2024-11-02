import { instance } from '@/api/axios'
import { getTask37Url } from '@/config/api.config'
import { API_URL } from '@/constants'
import { ITask37 } from '@/shared/types/tasks/task37.types'

export const Task37Service = {
	async getAll(_id: string | undefined) {
		const response = await instance.get<ITask37>(
			`${API_URL}${getTask37Url(`/${_id}`)}`
		)
		return response.data
	},
}
