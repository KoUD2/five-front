import { GrammarTask2Service } from '@/services/tasks/tasks/grammarTask2.service'
import { IGrammarTask2 } from '@/shared/types/tasks/grammarTask2.types'
import { useQuery } from '@tanstack/react-query'
import cn from 'classnames'
import { FC, useEffect, useRef, useState } from 'react'
import styles from './Grammar_test2.module.scss'

const Grammar_test2: FC<{ dataTask: string | undefined }> = ({ dataTask }) => {
	const [activeInputIndex, setActiveInputIndex] = useState<number | null>(null)
	const [inputValues, setInputValues] = useState<string[]>([])
	const [inputOffsets, setInputOffsets] = useState<number[]>([])
	const inputRefs = useRef<(HTMLInputElement | null)[]>([])
	const mainWrapperRef = useRef<HTMLDivElement | null>(null)

	const TASK_ID = `grammar_task_2`
	const EXPIRATION_TIME = 3600000

	const { data } = useQuery<IGrammarTask2>({
		queryKey: ['card-title', dataTask],
		queryFn: () => GrammarTask2Service.getAll(dataTask),
		enabled: !!dataTask,
		select: data => data,
	})

	const handleFocus = (index: number) => {
		setActiveInputIndex(index)
	}

	const handleBlur = () => {
		setActiveInputIndex(null)
	}

	const handleOptionSelect = (value: string, index: number) => {
		const updatedValues = [...inputValues]
		updatedValues[index] = value
		setInputValues(updatedValues)

		const timestamp = Date.now()
		localStorage.setItem(
			`${TASK_ID}_input_${index}`,
			JSON.stringify({ value, timestamp })
		)

		setActiveInputIndex(null)
		;(document.activeElement as HTMLElement)?.blur()
	}

	const handleOptionMouseDown = (
		event: React.MouseEvent,
		value: string,
		index: number
	) => {
		event.preventDefault()
		event.stopPropagation()
		handleOptionSelect(value, index)
	}

	const updateInputWidth = (index: number) => {
		const input = inputRefs.current[index]
		if (input) {
			const tempSpan = document.createElement('span')
			tempSpan.style.visibility = 'hidden'
			tempSpan.style.whiteSpace = 'nowrap'
			tempSpan.style.fontFamily = getComputedStyle(input).fontFamily
			tempSpan.style.fontSize = getComputedStyle(input).fontSize
			tempSpan.innerText = input.value || input.placeholder || ''

			document.body.appendChild(tempSpan)
			input.style.width = `${tempSpan.offsetWidth + 10}px`
			document.body.removeChild(tempSpan)
		}
	}

	const loadInputValues = () => {
		const savedValues = []
		const currentTime = Date.now()

		for (let i = 0; i < 7; i++) {
			const savedData = localStorage.getItem(`${TASK_ID}_input_${i}`)
			if (savedData) {
				const { value, timestamp } = JSON.parse(savedData)
				if (currentTime - timestamp < EXPIRATION_TIME) {
					savedValues.push(value || '')
				} else {
					localStorage.removeItem(`${TASK_ID}_input_${i}`)
					savedValues.push('')
				}
			} else {
				savedValues.push('')
			}
		}
		setInputValues(savedValues)
	}

	useEffect(() => {
		loadInputValues()
	}, [])

	useEffect(() => {
		if (mainWrapperRef.current) {
			const wrapperTop = mainWrapperRef.current.getBoundingClientRect().top
			const viewportWidth = window.innerWidth

			const offsets = inputRefs.current.map(input => {
				const offsetTop = input
					? input.getBoundingClientRect().top - wrapperTop
					: 0
				const offsetVw = ((offsetTop - 4) / viewportWidth) * 100
				return offsetVw
			})
			setInputOffsets(offsets)
		}
	}, [inputValues, data])

	useEffect(() => {
		inputValues.forEach((_, index) => updateInputWidth(index))
	}, [inputValues])

	let inputCounter = 0

	return (
		<div className={styles.mainWrapper} ref={mainWrapperRef}>
			<div className={styles.wrapper}>
				<h1>
					Прочитайте текст с пропусками, обозначенными номерами 30–36. Эти
					номера соответствуют заданиям 30–36, в которых представлены возможные
					варианты ответов. Выберете один из возможных вариантов ответов.
				</h1>
				<div className={styles.wrapperText}>
					<div className={cn(styles.tags, 'tags')}>
						{[30, 31, 32, 33, 34, 35, 36].map((num, index) => (
							<div
								key={num}
								className={styles.tagNumber}
								style={{
									position: 'absolute',
									top: inputOffsets[index] ? `${inputOffsets[index]}vw` : '0',
								}}
							>
								<h1>{num}</h1>
							</div>
						))}
					</div>
					<div className={styles.text}>
						<h1>{data?.title}</h1>
						{data?.text.map((paragraph, paragraphIndex) => (
							<div key={paragraphIndex} className={styles.paragraphWrapper}>
								{paragraph.map((sentence, sentenceIndex) => {
									if (sentenceIndex < paragraph.length - 1) {
										const currentInputIndex = inputCounter++

										return (
											<span
												key={sentenceIndex}
												className={styles.sentenceWrapper}
											>
												{sentence}{' '}
												<span className={styles.inputWrapper}>
													<input
														type='text'
														value={inputValues[currentInputIndex] || ''}
														ref={el => {
															inputRefs.current[currentInputIndex] = el
														}}
														onFocus={() => handleFocus(currentInputIndex)}
														onBlur={handleBlur}
														readOnly
													/>
													{activeInputIndex === currentInputIndex && (
														<div className={styles.dropdown}>
															{data?.list[currentInputIndex]?.map(
																(option, optionIndex) => (
																	<div
																		key={optionIndex}
																		className={styles.option}
																		onMouseDown={event =>
																			handleOptionMouseDown(
																				event,
																				option,
																				currentInputIndex
																			)
																		}
																	>
																		{option}
																	</div>
																)
															)}
														</div>
													)}
												</span>{' '}
											</span>
										)
									} else {
										return (
											<span
												key={sentenceIndex}
												className={styles.sentenceWrapper}
											>
												{sentence}{' '}
											</span>
										)
									}
								})}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Grammar_test2
