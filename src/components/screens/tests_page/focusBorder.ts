import { useEffect } from 'react'

export function focus_border() {
	useEffect(() => {
		const inputs = document.querySelectorAll('.allInputs')
		inputs.forEach((input: any) => {
			input.addEventListener('focus', () => {
				const parent = input.closest('.parent')

				if (parent) {
					parent.style.border = '0.078vw solid #ADADAD'
				}
			})
			input.addEventListener('blur', () => {
				const parent = input.closest('.parent')

				if (parent) {
					parent.style.border = ''
				}
			})
		})
	}, [])
}
