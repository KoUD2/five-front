import { instance } from '@/api/axios'
import { getGrammarTask1Url } from '@/config/api.config'
import { API_URL } from '@/constants'
import { IGrammarTask1 } from '@/shared/types/tasks/grammarTask1.types'

export const GrammarTask1Service = {
	async getAll(_id: string | undefined) {
		// const url = `${API_URL}${getTask1Url(`/${_id}`)}`
		// console.log(`/${_id}`)
		const response = await instance.get<IGrammarTask1>(
			`${API_URL}${getGrammarTask1Url(`/${_id}`)}`
		)
		return response.data
	},
}
