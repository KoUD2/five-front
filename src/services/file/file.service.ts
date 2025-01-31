import { axiosClassic } from '@/api/axios'

export const FileService = {
	async upload(file: FormData, folder?: string) {
		return axiosClassic.post<{ url: string; name: string }[]>('/files', file, {
			params: {
				folder,
			},
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	},
}
