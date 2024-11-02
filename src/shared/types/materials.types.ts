export interface IActor {
	_id: string
	photo: string
	name: string
	countMovies: number
	slug: string
}

export interface IGenre {
	_id: string
	name: string
	slug: string
	description: string
}

export interface IMaterial {
	_id: string
	title: string
	text: string
	link: string
	type: string
	time: string
}
