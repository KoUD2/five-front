import cn from 'classnames'
import { FC } from 'react'
import styles from './Test10.module.scss'

const Test10: FC = () => {
	const answers = Array.from({ length: 8 }, (_, index) => index + 1)
	const texts = Array.from({ length: 7 }, (_, index) => index + 1)

	function indexToLetter(index: number) {
		return String.fromCharCode(65 + index)
	}

	return (
		<div className={cn(styles.wrapper, 'parent')}>
			<div className={styles.number}>
				<p>10</p>
			</div>
			<div className={styles.contentAnswers}>
				<div className={styles.wrapperAudioText}>
					<div className={styles.questionAnswers}>
						<h1 className={styles.header}>
							Впишите 8&nbsp;заголовков в&nbsp;поля ниже, вставьте
							7&nbsp;текстов, затем последовательно верные ответы в&nbsp;поля
							под английскими буквами.
						</h1>
						<div className={styles.allInputs}>
							{answers.map(num => (
								<div key={num} className={styles.inputQuestions}>
									<p>{num}.</p>
									<input
										type='text'
										placeholder='Вставьте заголовок'
										className={styles.inputQuestion}
									/>
								</div>
							))}
						</div>
						<div className={styles.wrapperTextArea}>
							{texts.map(num => (
								<div key={num} className={styles.textAreaSegment}>
									<p>{indexToLetter(num - 1)}.</p>
									<textarea
										name=''
										id=''
										placeholder='Вставьте текст'
									></textarea>
								</div>
							))}
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

export default Test10
