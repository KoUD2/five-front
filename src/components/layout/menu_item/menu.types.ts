export interface IMenuItem {
	icon: any
	title: string
	link: string
}

export interface IMenu {
	title: string
	items: IMenuItem[]
}
