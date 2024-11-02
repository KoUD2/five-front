import { getDeadlineUrl } from '@/config/api.config'
import { API_URL } from '@/constants'
import { ICard } from '@/shared/types/deadline.types'
import axios from 'axios'

export const DeadlineService = {
	async getAll(searchTerm?: string): Promise<ICard[]> {
		const response = await axios.get<ICard[]>(
			`${API_URL}${getDeadlineUrl(searchTerm)}`
		)
		return response.data
	},
}
