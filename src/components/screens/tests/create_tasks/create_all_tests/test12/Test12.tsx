import cn from 'classnames'
import { FC } from 'react'
import styles from './Test12.module.scss'

const Test12: FC = () => {
	const answers = Array.from({ length: 4 }, (_, index) => index + 1)

	return (
		<div className={cn(styles.wrapper, 'parent')}>
			<div className={styles.number}>
				<p>12</p>
			</div>
			<div className={styles.contentAnswers}>
				<div className={styles.wrapperAudioText}>
					<div className={styles.questionAnswers}>
						<h1 className={styles.header}>
							Впишите вопрос к&nbsp;заданию, затем 4&nbsp;варианта ответа
							на&nbsp;вопрос в&nbsp;поля ниже, обозначенными цифрами 1&ndash;4,
							вставьте текст и&nbsp;заголовок, затем напишите верный ответ.
						</h1>
						<input
							type='text'
							className={styles.questionPart}
							placeholder='Вставьте вопрос к заданию'
						/>
						<div className={styles.allInputs}>
							{answers.map(num => (
								<div key={num} className={styles.inputQuestions}>
									<p>{num}.</p>
									<input
										type='text'
										placeholder='Вставьте ответ на вопрос'
										className={styles.inputQuestion}
									/>
								</div>
							))}
						</div>
						<div className={styles.wrapperAllTexts}>
							<div>
								<input
									type='text'
									className={styles.questionPart}
									placeholder='Вставьте загловок текста'
								/>
								<button className={styles.buttonCopy}>
									Копировать из 12 задания
								</button>
							</div>
							<div className={styles.wrapperTextArea}>
								<textarea
									name=''
									id=''
									placeholder={`Вставьте текст\n\nНе забывайте про абзацное членение для лучшей читаемости текста, для этого просто нажимайте на ENTER.`}
								></textarea>
							</div>
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
			</div>
		</div>
	)
}

export default Test12
