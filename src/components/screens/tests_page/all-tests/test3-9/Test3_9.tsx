import { Task3Service } from '@/services/tasks/tasks/task3.service'
import { ITask3 } from '@/shared/types/tasks/task3.types'
import { useQuery } from '@tanstack/react-query'
import cn from 'classnames'
import { FC, useEffect, useState } from 'react'
import TogglableText from '../../Special_p'
import styles from './Test3_9.module.scss'

const Test3_9: FC<{ number: number; dataTask: string | undefined }> = ({
	number,
	dataTask,
}) => {
	const TASK_ID = `task3_${number}` // Unique identifier for the task with exercise number
	const EXPIRATION_TIME = 3600000 // 1 hour in milliseconds

	// Declare testId state
	const [testId, setTestId] = useState<string | null>(null)

	// Only set testId when the component is mounted in the browser
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const pathTestId = window.location.pathname.split('/')[2]
			setTestId(pathTestId)
		}
	}, [])

	const { data } = useQuery<ITask3>({
		queryKey: ['card-title', number, dataTask],
		queryFn: () => Task3Service.getAll(String(number), dataTask),
		enabled: !!dataTask,
		select: data => data,
	})

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
			'.allInputs3'
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
			<div className={styles.contentAnswers}>
				<div className={styles.wrapperAudioText}>
					<div className={styles.wrapperAT}>
						<div className={styles.number}>
							<p>{number}</p>
						</div>
						<h1 className={styles.header}>{data.header}</h1>
					</div>
					<div className={styles.answersVar}>
						<div className={styles.variants}>
							{Object.entries(data.statement)
								.slice(0, -1)
								.map(([key, value], i) => (
									<TogglableText key={key} text={`${i + 1}) ${value}`} />
								))}
						</div>
						<div className={styles.answer}>
							<p>Ответ:</p>
							<div className={styles.divInput}>
								<input
									type='text'
									maxLength={1}
									className={cn(styles.input, 'inputMy2', 'allInputs3')}
									id={`input${number}`} // Dynamic ID based on exercise number
									onChange={handleInputChange}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.audio}></div>
		</div>
	) : (
		''
	)
}

export default Test3_9
