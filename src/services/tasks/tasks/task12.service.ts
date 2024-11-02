import { instance } from '@/api/axios'
import { getTask3Url } from '@/config/api.config'
import { API_URL } from '@/constants'
import { ITask12 } from '@/shared/types/tasks/task12.types'

export const Task12Service = {
	async getAll(_id: string | undefined, num: number) {
		const response = await instance.get<ITask12>(
			`${API_URL}${getTask3Url(`${_id}`, `${num}`)}`
		)
		return response.data
	},
}
