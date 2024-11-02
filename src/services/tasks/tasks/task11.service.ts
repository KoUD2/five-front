import { instance } from '@/api/axios'
import { getTask11Url } from '@/config/api.config'
import { API_URL } from '@/constants'
import { ITask11 } from '@/shared/types/tasks/task11.types'

export const Task11Service = {
	async getAll(_id: string | undefined) {
		const response = await instance.get<ITask11>(
			`${API_URL}${getTask11Url(`/${_id}`)}`
		)
		return response.data
	},
}
