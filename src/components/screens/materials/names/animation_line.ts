import { useEffect } from 'react'

export function animation(content: string) {
	useEffect(() => {
		let line = document.getElementById('line')

		if (content === 'books') {
			line!.style.marginLeft = '12.552vw'
			line!.style.width = '3.906vw'
		}

		if (content === 'links') {
			line!.style.marginLeft = '17.5vw'
			line!.style.width = '4.844vw'
		}

		if (content === 'materials') {
			line!.style.marginLeft = '0'
			line!.style.width = '11.51vw'
		}
		return
	})
}
