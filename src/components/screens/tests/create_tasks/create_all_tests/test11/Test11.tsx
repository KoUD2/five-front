import cn from 'classnames'
import { FC } from 'react'
import styles from './Test11.module.scss'

const Test11: FC = () => {
	const answers = Array.from({ length: 7 }, (_, index) => index + 1)

	return (
		<div className={cn(styles.wrapper, 'parent')}>
			<div className={styles.number}>
				<p>11</p>
			</div>
			<div className={styles.contentAnswers}>
				<div className={styles.wrapperAudioText}>
					<div className={styles.questionAnswers}>
						<h1 className={styles.header}>
							Впишите 7&nbsp;частей предложения в&nbsp;поля ниже, обозначенными
							цифрами 1&ndash;7, вставьте текст, на&nbsp;месте пропуска впишите
							букву с&nbsp;нижним подчеруиванием, как в&nbsp;примере ниже, затем
							напишите последовательно верные ответы в&nbsp;поля под английскими
							буквами.
						</h1>
						<div className={styles.allInputs}>
							{answers.map(num => (
								<div key={num} className={styles.inputQuestions}>
									<p>{num}.</p>
									<input
										type='text'
										placeholder='Вставьте часть предложения'
										className={styles.inputQuestion}
									/>
								</div>
							))}
						</div>
						<div className={styles.wrapperTextArea}>
							<textarea
								name=''
								id=''
								placeholder={`Вставьте текст\n\nA new report by the US census bureau shows A_, with enormous consequences for both rich and poor nations.`}
							></textarea>
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
										'inputMy2',
										'allInputs',
										'allInputs2'
									)}
									id='input7'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Test11
