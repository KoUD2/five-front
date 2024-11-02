'use client'

import { useEffect } from 'react'

export default function textarea_adaptive() {
	useEffect(() => {
		const adjustTextareaHeight = () => {
			const containers = document.querySelectorAll('.container')

			containers.forEach(container => {
				const paragraph = container.querySelector('p')
				const textarea = container.querySelector('textarea')
				const div1 = container.querySelector('div')

				if (paragraph && textarea) {
					const height = (paragraph.offsetHeight / window.innerWidth) * 100
					// const height2 =
					// 	(paragraph.offsetHeight / window.innerWidth) * 100 + 0.124
					textarea.style.height = `${height}vw`
					// div1.style.height = `${height2}vw`
				}
			})
		}

		adjustTextareaHeight()

		window.addEventListener('resize', adjustTextareaHeight)

		return () => {
			window.removeEventListener('resize', adjustTextareaHeight)
		}
	}, [])
}
