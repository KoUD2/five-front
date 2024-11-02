'use client'

import { useEffect } from 'react'

export function useOnlyNumber17(data: any) {
	useEffect(() => {
		if (data) {
			const inputs = document.getElementsByClassName('inputMy')

			const resetInputStyle = (
				input: HTMLInputElement,
				parentDiv: HTMLElement | null,
				originalPlaceholder: string | null
			) => {
				if (parentDiv) {
					parentDiv.style.background = ''
				}
				input.placeholder = ''
				input.removeAttribute('data-original-placeholder')
			}

			const handleInput = (event: Event) => {
				const input = event.target as HTMLInputElement
				const parentDiv = input.closest('div')
				const originalPlaceholder =
					input.getAttribute('data-original-placeholder') || input.placeholder

				if (!/^[1-7]*$/.test(input.value)) {
					input.value = ''
					input.setAttribute('data-original-placeholder', originalPlaceholder)
					input.placeholder = '1-7'
					if (parentDiv) {
						parentDiv.style.background = '#FDECDB'
					}

					const timeoutId = setTimeout(
						() => resetInputStyle(input, parentDiv, originalPlaceholder),
						3000
					)
					input.setAttribute('data-timeout-id', timeoutId.toString())
				} else if (/^[1-7]+$/.test(input.value)) {
					const timeoutId = input.getAttribute('data-timeout-id')
					if (timeoutId) {
						clearTimeout(Number(timeoutId))
					}
					resetInputStyle(input, parentDiv, originalPlaceholder)
				}
			}

			Array.from(inputs).forEach(input => {
				input.addEventListener('input', handleInput)
			})

			return () => {
				Array.from(inputs).forEach(input => {
					input.removeEventListener('input', handleInput)
				})
			}
		}
	}, [data])
}
