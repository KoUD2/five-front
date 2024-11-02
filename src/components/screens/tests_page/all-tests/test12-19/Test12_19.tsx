import Button from '@/components/ui/top_bar/Button'
import { useFocusBorder } from '@/hooks/useFocusBorder'
import { useOnlyNumber14 } from '@/hooks/useOnlyNumber14'
import { Task12Service } from '@/services/tasks/tasks/task12.service'
import { ITask12 } from '@/shared/types/tasks/task12.types'
import { useQuery } from '@tanstack/react-query'
import cn from 'classnames'
import { FC, useEffect, useState } from 'react'
import TogglableText from '../../Special_p'
import styles from './Test12_19.module.scss'

const Test12_19: FC<{ dataTask: string | undefined; number: number }> = ({
	dataTask,
	number,
}) => {
	const [isActive, setIsActive] = useState(false)
	const [testId, setTestId] = useState<string | null>(null)

	const cN = cn(styles.allText, { [styles.hidAllText]: isActive })

	const TASK_ID = `task12_${number}`
	const EXPIRATION_TIME = 3600000
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const pathTestId = window.location.pathname.split('/')[2]
			setTestId(pathTestId)
		}
	}, [])

	const { data } = useQuery<ITask12>({
		queryKey: ['card-title', dataTask, number],
		queryFn: () => Task12Service.getAll(dataTask, number),
		enabled: !!dataTask && !!number,
	})

	useOnlyNumber14(data)
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
			'.allInputs12'
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
			<div className={styles.wrapper2}>
				<div className={styles.numberTask}>
					<div className={styles.number}>
						<p>{number}</p>
					</div>
					<div className={styles.allContent}>
						<h1>{data.nameEx}</h1>
					</div>
				</div>
				<Button
					className={cn(styles.button, { [styles.orangeButton]: isActive })}
					onClick={() => setIsActive(!isActive)}
				>
					<h1>{isActive ? 'Скрыть текст' : 'Показать текст'}</h1>
				</Button>
			</div>
			<div className={cN}>
				<h1>{data.nameEx}</h1>
				<div className={styles.fullText}>
					{data.text.map((text: string, index: number) => (
						<div key={index} className={styles.pText}>
							{text}
						</div>
					))}
				</div>
			</div>
			<div className={cn(styles.variants, { [styles.variantsFull]: isActive })}>
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
						className={cn(styles.input, 'inputMy2', 'allInputs12')}
						onChange={handleInputChange}
						id={`input${number}`}
					/>
				</div>
			</div>
		</div>
	) : (
		''
	)
}

export default Test12_19
