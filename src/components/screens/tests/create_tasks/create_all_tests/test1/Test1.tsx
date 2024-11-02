import DownloadAudio from '@/components/ui/download_audio/DownloadAudio'
import cn from 'classnames'
import { FC } from 'react'
import styles from './Test1.module.scss'

const Test1: FC = () => {
	const answers = Array.from({ length: 7 }, (_, index) => index + 1)

	return (
		<div className={cn(styles.wrapper, 'parent')}>
			<div className={styles.number}>
				<p>1</p>
			</div>
			<div className={styles.contentAnswers}>
				<div className={styles.wrapperAudioText}>
					<div className={styles.questionAnswers}>
						<h1 className={styles.header}>
							Впишите 7&nbsp;утверждений в&nbsp;поля ниже, затем последовательно
							верные ответы в&nbsp;поля под английскими буквами в&nbsp;строку
							с&nbsp;утверждениями и&nbsp;загрузите аудиофайл.
						</h1>
						<div className={styles.allInputs}>
							{answers.map(num => (
								<div key={num} className={styles.inputQuestions}>
									<p>{num}.</p>
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
						/>
					</div>
					<div className={cn(styles.gridItem2, styles.input2)}>
						<input
							type='text'
							maxLength={1}
							className={cn(styles.input, 'inputMy', 'allInputs', 'allInputs1')}
							id='input2'
						/>
					</div>
					<div className={cn(styles.gridItem2, styles.input3)}>
						<input
							type='text'
							maxLength={1}
							className={cn(styles.input, 'inputMy', 'allInputs', 'allInputs1')}
							id='input3'
						/>
					</div>
					<div className={cn(styles.gridItem2, styles.input4)}>
						<input
							type='text'
							maxLength={1}
							className={cn(styles.input, 'inputMy', 'allInputs', 'allInputs1')}
							id='input4'
						/>
					</div>
					<div className={cn(styles.gridItem2, styles.input5)}>
						<input
							type='text'
							maxLength={1}
							className={cn(styles.input, 'inputMy', 'allInputs', 'allInputs1')}
							id='input5'
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
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Test1
