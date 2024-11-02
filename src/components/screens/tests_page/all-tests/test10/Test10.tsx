import { useFocusBorder } from '@/hooks/useFocusBorder'
import { useOnlyNumber18 } from '@/hooks/useOnlyNumber18'
import { Task10Service } from '@/services/tasks/tasks/task10.service'
import { ITask10 } from '@/shared/types/tasks/task10.types'
import { useQuery } from '@tanstack/react-query'
import cn from 'classnames'
import { FC, useEffect, useState } from 'react'
import TogglableText from '../../Special_p'
import textarea_adaptive from '../../textarea_adaptive'
import styles from './Test10.module.scss'

const Test10: FC<{ dataTask: string | undefined }> = ({ dataTask }) => {
	const TASK_ID = 'task10' // Since it's a single task, use a constant TASK_ID
	const EXPIRATION_TIME = 3600000 // 1 hour in milliseconds

	// State to store testId
	const [testId, setTestId] = useState<string | null>(null)

	// Set testId after component mounts
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const pathTestId = window.location.pathname.split('/')[2]
			setTestId(pathTestId)
		}
	}, [])

	const { data } = useQuery<ITask10>({
		queryKey: ['card-title', dataTask],
		queryFn: () => Task10Service.getAll(dataTask),
		enabled: !!dataTask,
		select: data => data,
	})

	textarea_adaptive()
	useOnlyNumber18(data)
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
			'.allInputs10'
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
					localStorage.removeItem(key) // Remove expired or mismatched data
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
				<p>10</p>
			</div>
			<div className={styles.allContent}>
				<h1>
					Установите соответствие между заголовками 1&ndash;8 и&nbsp;текстами
					A&mdash;G. Запишите свои ответы в&nbsp;таблицу. Используйте каждую
					цифру только один раз. В&nbsp;задании есть один лишний заголовок.
				</h1>
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
							.slice(4, 8)
							.map(([key, value], i) => (
								<TogglableText key={key} text={`${i + 5}. ${value}`} />
							))}
					</div>
				</div>
				<div className={styles.blockTexts}>
					<div className={styles.variantNotes}>
						<div className={styles.textArea}>
							<div className={cn(styles.containerTextArea, 'container')}>
								<p>{`A. ${data.texts['text1']}`}</p>
								<div className={styles.textareaContainer}>
									<textarea name='' id='' cols={30} rows={10}></textarea>
								</div>
							</div>
							<div className={cn(styles.containerTextArea, 'container')}>
								<p>{`B. ${data.texts['text2']}`}</p>
								<div className={styles.textareaContainer}>
									<textarea name='' id='' cols={30} rows={10}></textarea>
								</div>
							</div>
							<div className={cn(styles.containerTextArea, 'container')}>
								<p>{`C. ${data.texts['text3']}`}</p>
								<div className={styles.textareaContainer}>
									<textarea name='' id='' cols={30} rows={10}></textarea>
								</div>
							</div>
							<div className={cn(styles.containerTextArea, 'container')}>
								<p>{`D. ${data.texts['text4']}`}</p>
								<div className={styles.textareaContainer}>
									<textarea name='' id='' cols={30} rows={10}></textarea>
								</div>
							</div>
							<div className={cn(styles.containerTextArea, 'container')}>
								<p>{`E. ${data.texts['text5']}`}</p>
								<div className={styles.textareaContainer}>
									<textarea name='' id='' cols={30} rows={10}></textarea>
								</div>
							</div>
							<div className={cn(styles.containerTextArea, 'container')}>
								<p>{`F. ${data.texts['text6']}`}</p>
								<div className={styles.textareaContainer}>
									<textarea name='' id='' cols={30} rows={10}></textarea>
								</div>
							</div>
							<div className={cn(styles.containerTextArea, 'container')}>
								<p>{`G. ${data.texts['text7']}`}</p>
								<div className={styles.textareaContainer}>
									<textarea name='' id='' cols={30} rows={10}></textarea>
								</div>
							</div>
						</div>
						<div></div>
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
									'inputMy3',
									'allInputs',
									'allInputs10'
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
									'inputMy3',
									'allInputs',
									'allInputs10'
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
									'inputMy3',
									'allInputs',
									'allInputs10'
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
									'inputMy3',
									'allInputs',
									'allInputs10'
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
									'inputMy3',
									'allInputs',
									'allInputs10'
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
									'inputMy3',
									'allInputs',
									'allInputs10'
								)}
								id='input6'
								onChange={handleInputChange}
							/>
						</div>
						<div
							className={cn(
								styles.gridItem2,
								styles.endGridItem,
								styles.input7
							)}
						>
							<input
								type='text'
								maxLength={1}
								className={cn(
									styles.input,
									'inputMy3',
									'allInputs',
									'allInputs10'
								)}
								id='input7'
								onChange={handleInputChange}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : (
		''
	)
}

export default Test10
