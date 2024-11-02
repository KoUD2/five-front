import { useEffect } from 'react'

export function animation_color() {
	useEffect(() => {
		let a_first = document.getElementsByTagName('a')
		a_first[0].addEventListener('click', () => {
			let main = document.getElementsByClassName('Главная')
			let div = main[0].getElementsByTagName('div')
			let svg = main[0].getElementsByTagName('svg')
			div[0].style.background = '#EB5931'
			div[1].style.background = '#F4F4F4'
			svg[0].style.color = '#EB5931'
			let path = svg[1].getElementsByTagName('path')
			path[0].style.fill = '#000'

			let main2 = document.getElementsByClassName('Материалы')
			let div2 = main2[0].getElementsByTagName('div')
			let svg2 = main2[0].getElementsByTagName('svg')
			div2[0].style.background = '#fff'
			div2[1].style.background = '#fff'
			svg2[0].style.color = '#767676'
			let path2 = svg2[1].getElementsByTagName('path')
			path2[0].style.fill = '#fff'

			let main3 = document.getElementsByClassName('Сообщения')
			let div3 = main3[0].getElementsByTagName('div')
			let svg3 = main3[0].getElementsByTagName('svg')
			div3[0].style.background = '#fff'
			div3[1].style.background = '#fff'
			svg3[0].style.color = '#767676'
			let path3 = svg3[1].getElementsByTagName('path')
			path3[0].style.fill = '#fff'
		})
		a_first[1].addEventListener('click', () => {
			let main = document.getElementsByClassName('Тесты')
			let div = main[0].getElementsByTagName('div')
			let svg = main[0].getElementsByTagName('svg')
			div[0].style.background = '#EB5931'
			div[1].style.background = '#F4F4F4'
			svg[0].style.color = '#EB5931'
			let path = svg[1].getElementsByTagName('path')
			path[0].style.fill = '#000'

			let main2 = document.getElementsByClassName('Материалы')
			let div2 = main2[0].getElementsByTagName('div')
			let svg2 = main2[0].getElementsByTagName('svg')
			div2[0].style.background = '#fff'
			div2[1].style.background = '#fff'
			svg2[0].style.color = '#767676'
			let path2 = svg2[1].getElementsByTagName('path')
			path2[0].style.fill = '#fff'

			let main3 = document.getElementsByClassName('Сообщения')
			let div3 = main3[0].getElementsByTagName('div')
			let svg3 = main3[0].getElementsByTagName('svg')
			div3[0].style.background = '#fff'
			div3[1].style.background = '#fff'
			svg3[0].style.color = '#767676'
			let path3 = svg3[1].getElementsByTagName('path')
			path3[0].style.fill = '#fff'
		})
		a_first[4].addEventListener('click', () => {
			let main = document.getElementsByClassName('Сообщения')
			let div = main[0].getElementsByTagName('div')
			let svg = main[0].getElementsByTagName('svg')
			div[0].style.background = '#EB5931'
			div[1].style.background = '#F4F4F4'
			svg[0].style.color = '#EB5931'
			let path = svg[1].getElementsByTagName('path')
			path[0].style.fill = '#000'

			let main2 = document.getElementsByClassName('Главная')
			let div2 = main2[0].getElementsByTagName('div')
			let svg2 = main2[0].getElementsByTagName('svg')
			div2[0].style.background = '#fff'
			div2[1].style.background = '#fff'
			svg2[0].style.color = '#767676'
			let path2 = svg2[1].getElementsByTagName('path')
			path2[0].style.fill = '#fff'

			let main3 = document.getElementsByClassName('Материалы')
			let div3 = main3[0].getElementsByTagName('div')
			let svg3 = main3[0].getElementsByTagName('svg')
			div3[0].style.background = '#fff'
			div3[1].style.background = '#fff'
			svg3[0].style.color = '#767676'
			let path3 = svg3[1].getElementsByTagName('path')
			path3[0].style.fill = '#fff'
		})
		a_first[5].addEventListener('click', () => {
			let main = document.getElementsByClassName('Материалы')
			let div = main[0].getElementsByTagName('div')
			let svg = main[0].getElementsByTagName('svg')
			div[0].style.background = '#EB5931'
			div[1].style.background = '#F4F4F4'
			svg[0].style.color = '#EB5931'
			let path = svg[1].getElementsByTagName('path')
			path[0].style.fill = '#000'

			let main2 = document.getElementsByClassName('Главная')
			let div2 = main2[0].getElementsByTagName('div')
			let svg2 = main2[0].getElementsByTagName('svg')
			div2[0].style.background = '#fff'
			div2[1].style.background = '#fff'
			svg2[0].style.color = '#767676'
			let path2 = svg2[1].getElementsByTagName('path')
			path2[0].style.fill = '#fff'

			let main3 = document.getElementsByClassName('Сообщения')
			let div3 = main3[0].getElementsByTagName('div')
			let svg3 = main3[0].getElementsByTagName('svg')
			div3[0].style.background = '#fff'
			div3[1].style.background = '#fff'
			svg3[0].style.color = '#767676'
			let path3 = svg3[1].getElementsByTagName('path')
			path3[0].style.fill = '#fff'
		})
		if (document.location.pathname === '/main/materials') {
			let main = document.getElementsByClassName('Материалы')
			let div = main[0].getElementsByTagName('div')
			let svg = main[0].getElementsByTagName('svg')
			div[0].style.background = '#EB5931'
			div[1].style.background = '#F4F4F4'
			svg[0].style.color = '#EB5931'
			let path = svg[1].getElementsByTagName('path')
			path[0].style.fill = '#000'
		}
		if (document.location.pathname === '/main/classes') {
			let main = document.getElementsByClassName('Классы')
			let div = main[0].getElementsByTagName('div')
			let svg = main[0].getElementsByTagName('svg')
			div[0].style.background = '#EB5931'
			div[1].style.background = '#F4F4F4'
			svg[0].style.color = '#EB5931'
			let path = svg[1].getElementsByTagName('path')
			path[0].style.fill = '#000'
		}
		if (document.location.pathname === '/main/test') {
			let main = document.getElementsByClassName('Тесты')
			let div = main[0].getElementsByTagName('div')
			let svg = main[0].getElementsByTagName('svg')
			div[0].style.background = '#EB5931'
			div[1].style.background = '#F4F4F4'
			svg[0].style.color = '#EB5931'
			let path = svg[1].getElementsByTagName('path')
			path[0].style.fill = '#000'
		}
		if (document.location.pathname === '/main') {
			let main = document.getElementsByClassName('Главная')
			let div = main[0].getElementsByTagName('div')
			let svg = main[0].getElementsByTagName('svg')
			div[0].style.background = '#EB5931'
			div[1].style.background = '#F4F4F4'
			svg[0].style.color = '#EB5931'
			let path = svg[1].getElementsByTagName('path')
			path[0].style.fill = '#000'
		}
	})
}
