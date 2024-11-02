import { IMaterial } from '@/shared/types/materials.types'

export interface IWidgetMaterial
	extends Pick<
		IMaterial,
		'_id' | 'title' | 'text' | 'link' | 'type' | 'time'
	> {}

export interface IMaterialList {
	title: string
	link: string
	materials: IWidgetMaterial[]
}
