import { useEffect } from 'react'

export function animation_pick_selectors() {
	useEffect(() => {
		let all = document.getElementById('all')
		let teacher = document.getElementById('teacher')
		let ai = document.getElementById('ai')
		let company = document.getElementById('company')

		all!.style.background = '#f4f4f4'

		function all_f() {
			all!.style.background = '#f4f4f4'
			teacher!.style.background = '#fff'
			ai!.style.background = '#fff'
			company!.style.background = '#fff'
		}

		all?.addEventListener('click', all_f)

		teacher?.addEventListener('click', function () {
			teacher!.style.background = '#f4f4f4'
			all!.style.background = '#fff'
			ai!.style.background = '#fff'
			company!.style.background = '#fff'
		})
		ai?.addEventListener('click', function () {
			ai!.style.background = '#f4f4f4'
			teacher!.style.background = '#fff'
			all!.style.background = '#fff'
			company!.style.background = '#fff'
		})
		company?.addEventListener('click', function () {
			company!.style.background = '#f4f4f4'
			ai!.style.background = '#fff'
			teacher!.style.background = '#fff'
			all!.style.background = '#fff'
		})
	})
	return
}
