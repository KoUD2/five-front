import { useFocusBorder } from '@/hooks/useFocusBorder'
import { useOnlyNumber13 } from '@/hooks/useOnlyNumber13'
import { Task2Service } from '@/services/tasks/tasks/task2.service'
import { ITask1 } from '@/shared/types/tasks/task1.types'
import { useQuery } from '@tanstack/react-query'
import cn from 'classnames'
import { FC, useEffect, useState } from 'react'
import TogglableText from '../../Special_p'
import styles from './Test2.module.scss'

const Test2: FC<{ dataTask: string | undefined }> = ({ dataTask }) => {
	const TASK_ID = 'task2'
	const EXPIRATION_TIME = 3600000

	const [testId, setTestId] = useState<string | null>(null)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const pathTestId = window.location.pathname.split('/')[2]
			setTestId(pathTestId)
		}
	}, [])

	const { data } = useQuery<ITask1>({
		queryKey: ['card-title', dataTask],
		queryFn: () => Task2Service.getAll(dataTask),
		enabled: !!dataTask,
		select: data => data,
	})

	function indexToLetter(index: number) {
		return String.fromCharCode(65 + index)
	}

	useOnlyNumber13(data)
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
			'.allInputs2'
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
				<p>2</p>
			</div>
			<div className={styles.contentAnswers}>
				<div className={styles.wrapperAudioText}>
					<div className={styles.questionAnswers}>
						<h1 className={styles.header}>
							Вы&nbsp;услышите диалог. Определите, какие из&nbsp;приведённых
							утверждений A&mdash;G соответствуют содержанию текста
							(1&nbsp;&mdash; True), какие не&nbsp;соответствуют (2&nbsp;&mdash;
							False), и&nbsp;о&nbsp;чём в&nbsp;тексте не&nbsp;сказано,
							то&nbsp;есть на&nbsp;основании текста нельзя дать
							ни&nbsp;положительного, ни&nbsp;отрицательного ответа
							(3&nbsp;&mdash; Not stated). Занесите номер выбранного Вами
							варианта в&nbsp;таблицу. Прослушайте запись дважды.
						</h1>
						<div className={styles.variants}>
							{Object.entries(data.statement)
								.slice(0, -1)
								.map(([key, value], i) => (
									<TogglableText
										key={key}
										text={`${indexToLetter(i)}. ${value}`}
									/>
								))}
						</div>
					</div>
					<div className={styles.audio}></div>
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
					<div className={styles.gridItem}>
						<p>F</p>
					</div>
					<div className={cn(styles.gridItem, styles.endGridItem)}>
						<p>G</p>
					</div>
					<div className={cn(styles.gridItem2, styles.input1)}>
						<input
							type='text'
							maxLength={1}
							className={cn(
								styles.input,
								'inputMy2',
								'allInputs',
								'allInputs2'
							)}
							id='input1'
							onChange={handleInputChange}
						/>
					</div>
					<div className={cn(styles.gridItem2, styles.input2)}>
						<input
							type='text'
							maxLength={1}
							className={cn(
								styles.input,
								'inputMy2',
								'allInputs',
								'allInputs2'
							)}
							id='input2'
							onChange={handleInputChange}
						/>
					</div>
					<div className={cn(styles.gridItem2, styles.input3)}>
						<input
							type='text'
							maxLength={1}
							className={cn(
								styles.input,
								'inputMy2',
								'allInputs',
								'allInputs2'
							)}
							id='input3'
							onChange={handleInputChange}
						/>
					</div>
					<div className={cn(styles.gridItem2, styles.input4)}>
						<input
							type='text'
							maxLength={1}
							className={cn(
								styles.input,
								'inputMy2',
								'allInputs',
								'allInputs2'
							)}
							id='input4'
							onChange={handleInputChange}
						/>
					</div>
					<div className={cn(styles.gridItem2, styles.input5)}>
						<input
							type='text'
							maxLength={1}
							className={cn(
								styles.input,
								'inputMy2',
								'allInputs',
								'allInputs2'
							)}
							id='input5'
							onChange={handleInputChange}
						/>
					</div>
					<div className={cn(styles.gridItem2, styles.input6)}>
						<input
							type='text'
							maxLength={1}
							className={cn(
								styles.input,
								'inputMy2',
								'allInputs',
								'allInputs2'
							)}
							id='input6'
							onChange={handleInputChange}
						/>
					</div>
					<div
						className={cn(styles.gridItem2, styles.endGridItem, styles.input7)}
					>
						<input
							type='text'
							maxLength={1}
							className={cn(
								styles.input,
								'inputMy2',
								'allInputs',
								'allInputs2'
							)}
							id='input7'
							onChange={handleInputChange}
						/>
					</div>
				</div>
			</div>
		</div>
	) : (
		''
	)
}

export default Test2
