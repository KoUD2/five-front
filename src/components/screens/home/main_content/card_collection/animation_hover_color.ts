import { useEffect } from 'react'

export function animation_hover_color() {
	useEffect(() => {
		let button = document.getElementsByTagName('button')
		button[1].addEventListener('mouseover', function () {
			button[1].style.background = '#EFECFB'
			button[1].style.border = '0.078vw solid #BFB4EF !important'
		})
		button[1].addEventListener('mouseleave', function () {
			button[1].style.background = '#fff'
			button[1].style.border = '0.078vw solid #adadad !important'
		})
		button[2].addEventListener('mouseover', function () {
			button[2].style.background = '#EFECFB'
			button[2].style.border = '0.078vw solid #BFB4EF !important'
		})
		button[2].addEventListener('mouseleave', function () {
			button[2].style.background = '#fff'
			button[2].style.border = '0.078vw solid #adadad !important'
		})
		button[3].addEventListener('mouseover', function () {
			button[3].style.background = '#EFECFB'
			button[3].style.border = '0.078vw solid #BFB4EF !important'
		})
		button[3].addEventListener('mouseleave', function () {
			button[3].style.background = '#fff'
			button[3].style.border = '0.078vw solid #adadad !important'
		})
		button[4].addEventListener('mouseover', function () {
			button[4].style.background = '#EFECFB'
			button[4].style.border = '0.078vw solid #BFB4EF !important'
		})
		button[4].addEventListener('mouseleave', function () {
			button[4].style.background = '#fff'
			button[4].style.border = '0.078vw solid #adadad !important'
		})
		button[6].addEventListener('mouseover', function () {
			button[6].style.background = '#EFECFB'
			button[6].style.border = '0.078vw solid #BFB4EF !important'
		})
		button[6].addEventListener('mouseleave', function () {
			button[6].style.background = '#fff'
			button[6].style.border = '0.078vw solid #adadad !important'
		})
	})
}
