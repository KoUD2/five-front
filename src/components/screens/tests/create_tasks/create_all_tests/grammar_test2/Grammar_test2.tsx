import cn from 'classnames'
import { FC } from 'react'
import styles from './Grammar_test2.module.scss'

const Grammar_test2: FC = () => {
	const answers = Array.from({ length: 7 }, (_, index) => index + 1)

	return (
		<div className={cn(styles.wrapper, 'parent')}>
			<div className={styles.contentAnswers}>
				<div className={styles.wrapperAudioText}>
					<div className={styles.questionAnswers}>
						<h1 className={styles.header}>
							Вставьте текст, на&nbsp;месте пропуска впишите число с&nbsp;нижним
							подчеркиванием от&nbsp;30&nbsp;до&nbsp;36, а&nbsp;в&nbsp;скобках
							4&nbsp;варианта ответа через слеш, как в&nbsp;примере ниже, затем
							напишите последовательно верные ответы в&nbsp;поля под числами.
						</h1>
						<div className={styles.wrapperTextArea}>
							<textarea
								name=''
								id=''
								placeholder={`Вставьте текст\n\nThe man had come a long way alone, and he was really proud 33_ (of/on/at/by) himself.`}
							></textarea>
						</div>
						<div className={styles.answers}>
							<div className={styles.gridItem}>
								<p>30</p>
							</div>
							<div className={styles.gridItem}>
								<p>31</p>
							</div>
							<div className={styles.gridItem}>
								<p>32</p>
							</div>
							<div className={styles.gridItem}>
								<p>33</p>
							</div>
							<div className={styles.gridItem}>
								<p>34</p>
							</div>
							<div className={styles.gridItem}>
								<p>35</p>
							</div>
							<div className={cn(styles.gridItem, styles.endGridItem)}>
								<p>36</p>
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

export default Grammar_test2
