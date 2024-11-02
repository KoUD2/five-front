import DownloadAudio from '@/components/ui/download_audio/DownloadAudio'
import cn from 'classnames'
import { FC } from 'react'
import styles from './Test3.module.scss'

const Test3: FC = () => {
	const answers = Array.from({ length: 3 }, (_, index) => index + 1)

	return (
		<div className={cn(styles.wrapper, 'parent')}>
			<div className={styles.number}>
				<p>3</p>
			</div>
			<div className={styles.contentAnswers}>
				<div className={styles.wrapperAudioText}>
					<div className={styles.questionAnswers}>
						<h1 className={styles.header}>
							Впишите начало предложения, которое необходимо закончить одним
							из&nbsp;утверждений, вставьте 3&nbsp;утверждения в&nbsp;поля ниже,
							затем правильный ответ и&nbsp;загрузите аудиофайл.
						</h1>
						<input
							type='text'
							placeholder='Вопрос к заданию'
							className={styles.inputQuestion}
						/>
						<div className={styles.allInputs}>
							{answers.map(num => (
								<div key={num} className={styles.inputQuestions}>
									<p>{num})</p>
									<input
										type='text'
										placeholder='Вставьте утверждение'
										className={styles.inputQuestion}
									/>
								</div>
							))}
						</div>
					</div>
					<DownloadAudio />
				</div>
				<div className={styles.answers}>
					<p>Правильный ответ:</p>
					<div className={styles.divInput}>
						<input
							type='text'
							maxLength={1}
							className={cn(styles.input, 'inputMy2', 'allInputs12')}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Test3
