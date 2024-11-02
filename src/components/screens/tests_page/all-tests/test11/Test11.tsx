import { useFocusBorder } from '@/hooks/useFocusBorder'
import { useOnlyNumber17 } from '@/hooks/useOnlyNumber17'
import { Task11Service } from '@/services/tasks/tasks/task11.service'
import { ITask11 } from '@/shared/types/tasks/task11.types'
import { useQuery } from '@tanstack/react-query'
import cn from 'classnames'
import { FC, useEffect, useState } from 'react'
import TogglableText from '../../Special_p'
import styles from './Test11.module.scss'

const Test11: FC<{
	dataTask: string | undefined
}> = ({ dataTask }) => {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	let currentLetterIndex = 0

	const TASK_ID = 'task11'
	const EXPIRATION_TIME = 3600000 // 1 hour in milliseconds

	// State to manage testId
	const [testId, setTestId] = useState<string | null>(null)

	// Use useEffect to set testId only on client side
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const pathTestId = window.location.pathname.split('/')[2]
			setTestId(pathTestId)
		}
	}, [])

	const { data } = useQuery<ITask11>({
		queryKey: ['card-title', dataTask],
		queryFn: () => Task11Service.getAll(dataTask),
		enabled: !!dataTask,
		select: data => data,
	})

	const replaceABCWithLetter = (paragraph: string[]) => {
		return paragraph.map((sentence, index) => (
			<div key={index} className={styles.sentence}>
				{sentence}
				{index < paragraph.length - 1 && (
					<strong className={styles.strongFont}>
						{` ${alphabet[currentLetterIndex++]}______ `}
					</strong>
				)}
			</div>
		))
	}

	useOnlyNumber17(data)
	useFocusBorder(data)

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target
		const timestamp = Date.now()

		if (testId) {
			localStorage.setItem(
				`${testId}_${TASK_ID}_${id}`,
				JSON.stringify({
					value,
					timestamp,
					savedTestId: testId,
					savedTaskId: TASK_ID,
				})
			)
		}
	}

	const loadInputValues = () => {
		if (!testId) return

		const inputs = document.querySelectorAll(
			'.allInputs11'
		) as NodeListOf<HTMLInputElement>
		const currentTime = Date.now()

		inputs.forEach(input => {
			const key = `${testId}_${TASK_ID}_${input.id}`
			const savedData = localStorage.getItem(key)

			if (savedData) {
				const { value, timestamp, savedTestId, savedTaskId } =
					JSON.parse(savedData)

				if (
					currentTime - timestamp < EXPIRATION_TIME &&
					savedTestId === testId &&
					savedTaskId === TASK_ID
				) {
					input.value = value
				} else {
					localStorage.removeItem(key)
				}
			}
		})
	}

	useEffect(() => {
		if (data) {
			loadInputValues()
		}
	}, [data, testId])

	return !!data ? (
		<div className={cn(styles.wrapper, 'parent')}>
			<div className={styles.number}>
				<p>11</p>
			</div>
			<div className={styles.allContent}>
				<h1>
					Прочитайте текст и&nbsp;заполните пропуски A&mdash;F частями
					предложений, обозначенными цифрами 1&ndash;7. Одна из&nbsp;частей
					в&nbsp;списке 1&ndash;7&nbsp;&mdash; лишняя. Занесите цифры,
					обозначающие соответствующие части предложений, в&nbsp;таблицу.
				</h1>
				<div className={styles.allText}>
					<h1>{data.header}</h1>
					<div className={styles.fullText}>
						{data.text.map((paragraph: string[], index: number) => (
							<div key={index} className={styles.pText}>
								{replaceABCWithLetter(paragraph)}
							</div>
						))}
					</div>
				</div>
				<div className={styles.answersVariants}>
					<div>
						{Object.entries(data.statement)
							.slice(0, 4)
							.map(([key, value], i) => (
								<TogglableText key={key} text={`${i + 1}. ${value}`} />
							))}
					</div>
					<div>
						{Object.entries(data.statement)
							.slice(4, 7)
							.map(([key, value], i) => (
								<TogglableText key={key} text={`${i + 5}. ${value}`} />
							))}
					</div>
				</div>

				<div className={styles.answers}>
					<div className={styles.gridItem}>
						<p>A</p>
					</div>
					<div className={styles.gridItem}>
						<p>B</p>
					</div>
					<div className={styles.gridItem}>
						<p>C</p>
					</div>
					<div className={styles.gridItem}>
						<p>D</p>
					</div>
					<div className={styles.gridItem}>
						<p>E</p>
					</div>
					<div className={cn(styles.gridItem, styles.endGridItem)}>
						<p>F</p>
					</div>
					{Array.from({ length: 6 }, (_, i) => (
						<div
							key={i}
							className={cn(styles.gridItem2, styles[`input${i + 1}`])}
						>
							<input
								type='text'
								maxLength={1}
								className={cn(
									styles.input,
									'inputMy',
									'allInputs',
									'allInputs11'
								)}
								id={`input${i + 1}`}
								onChange={handleInputChange}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	) : (
		''
	)
}

export default Test11
