import { instance } from '@/api/axios'
import { getGrammarTask2Url } from '@/config/api.config'
import { API_URL } from '@/constants'
import { IGrammarTask2 } from '@/shared/types/tasks/grammarTask2.types'

export const GrammarTask2Service = {
	async getAll(_id: string | undefined) {
		// const url = `${API_URL}${getTask1Url(`/${_id}`)}`
		// console.log(`/${_id}`)
		const response = await instance.get<IGrammarTask2>(
			`${API_URL}${getGrammarTask2Url(`/${_id}`)}`
		)
		return response.data
	},
}
