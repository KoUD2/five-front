import { useEffect } from 'react'

export function animation_slide() {
	useEffect(() => {
		let bell = document.getElementById('bell')
		let wrapper = document.getElementById('wrapper')
		let notification_wrapper = document.getElementById('notification_wrapper')

		function bellMove() {
			document.body.style.overflow = 'hidden'
			wrapper!.style.display = 'block'
			notification_wrapper!.style.display = 'block'
			setTimeout(function () {
				notification_wrapper!.style.transform = 'translateX(0)'
			}, 1)
		}

		bell?.addEventListener('click', bellMove)

		wrapper?.addEventListener('click', function () {
			wrapper!.style.display = 'none'
			notification_wrapper!.style.display = 'none'
			notification_wrapper!.style.transform = 'translateX(37.24vw)'
			document.body.style.overflow = 'auto'
			document.body.style.overflowX = 'hidden'
		})
	})
	return
}
