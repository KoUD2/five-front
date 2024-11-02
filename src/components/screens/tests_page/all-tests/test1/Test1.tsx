import AudioPlayer from '@/components/ui/audio_pleer/AudioPlayer'
import { useFocusBorder } from '@/hooks/useFocusBorder'
import { useOnlyNumber17 } from '@/hooks/useOnlyNumber17'
import { Task1Service } from '@/services/tasks/tasks/task1.service'
import { ITask1 } from '@/shared/types/tasks/task1.types'
import { useQuery } from '@tanstack/react-query'
import cn from 'classnames'
import { FC, useEffect, useState } from 'react'
import TogglableText from '../../Special_p'
import styles from './Test1.module.scss'

const Test1: FC<{ dataTask: string | undefined }> = ({ dataTask }) => {
	const TASK_ID = 'task1'
	const EXPIRATION_TIME = 3600000
	const [testId, setTestId] = useState<string | null>(null)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const id = window.location.pathname.split('/')[2]
			setTestId(id)
		}
	}, [])

	const { data } = useQuery<ITask1>({
		queryKey: ['card-title', dataTask],
		queryFn: () => Task1Service.getAll(dataTask!),
		enabled: !!dataTask,
		select: data => data,
	})

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
			'.allInputs1'
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
				<p>1</p>
			</div>
			<div className={styles.contentAnswers}>
				<div className={styles.wrapperAudioText}>
					<div className={styles.questionAnswers}>
						<h1 className={styles.header}>
							Вы&nbsp;услышите 6&nbsp;высказываний. Установите соответствие
							между высказываниями каждого говорящего A&mdash;F
							и&nbsp;утверждениями, данными в&nbsp;списке 1&ndash;7. Используйте
							каждое утверждение, обозначенное соответствующей цифрой, только
							один раз. В&nbsp;задании есть одно лишнее утверждение. Прослушайте
							запись дважды.
						</h1>
						<div className={styles.variants}>
							{Object.entries(data.statement)
								.slice(0, -1)
								.map(([key, value], i) => (
									<TogglableText key={key} text={`${i + 1}. ${value}`} />
								))}
						</div>
					</div>
					<div className={styles.audio}>
						<AudioPlayer audioFile={'/Do.mp3'} />
					</div>
				</div>
				<div className={styles.answers}>
					<div className={cn(styles.gridItem, styles.startGridItem)}>
						<p className={styles.descAnswers}>Говорящий</p>
					</div>
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

					<div className={cn(styles.gridItem2, styles.startGridItem)}>
						<p className={styles.descAnswers}>Утверждение</p>
					</div>
					<div className={cn(styles.gridItem2, styles.input1)}>
						<input
							type='text'
							maxLength={1}
							className={cn(styles.input, 'inputMy', 'allInputs', 'allInputs1')}
							id='input1'
							onChange={handleInputChange}
						/>
					</div>
					<div className={cn(styles.gridItem2, styles.input2)}>
						<input
							type='text'
							maxLength={1}
							className={cn(styles.input, 'inputMy', 'allInputs', 'allInputs1')}
							id='input2'
							onChange={handleInputChange}
						/>
					</div>
					<div className={cn(styles.gridItem2, styles.input3)}>
						<input
							type='text'
							maxLength={1}
							className={cn(styles.input, 'inputMy', 'allInputs', 'allInputs1')}
							id='input3'
							onChange={handleInputChange}
						/>
					</div>
					<div className={cn(styles.gridItem2, styles.input4)}>
						<input
							type='text'
							maxLength={1}
							className={cn(styles.input, 'inputMy', 'allInputs', 'allInputs1')}
							id='input4'
							onChange={handleInputChange}
						/>
					</div>
					<div className={cn(styles.gridItem2, styles.input5)}>
						<input
							type='text'
							maxLength={1}
							className={cn(styles.input, 'inputMy', 'allInputs', 'allInputs1')}
							id='input5'
							onChange={handleInputChange}
						/>
					</div>
					<div
						className={cn(styles.gridItem2, styles.endGridItem, styles.input6)}
					>
						<input
							type='text'
							maxLength={1}
							className={cn(styles.input, 'inputMy', 'allInputs', 'allInputs1')}
							id='input6'
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

export default Test1
