import { instance } from '@/api/axios'
import { getFullTasksUrl } from '@/config/api.config'
import { API_URL } from '@/constants'
import { IFullTasks } from '@/shared/types/fullTasks.types'

export const TasksService = {
	async getAll(_id: string | undefined): Promise<IFullTasks> {
		const url = `${API_URL}${getFullTasksUrl(`/${_id}`)}`
		const response = await instance.get<IFullTasks>(url)
		return response.data
	},
}
