import { GrammarTask1Service } from '@/services/tasks/tasks/grammarTask1.service'
import { IGrammarTask1 } from '@/shared/types/tasks/grammarTask1.types'
import { useQuery } from '@tanstack/react-query'
import cn from 'classnames'
import { FC } from 'react'
import styles from './Grammar_test1.module.scss'

const Grammar_test1: FC<{ dataTask: string | undefined }> = ({ dataTask }) => {
	const { data } = useQuery<IGrammarTask1>({
		queryKey: ['card-title', dataTask],
		queryFn: () => GrammarTask1Service.getAll(dataTask),
		enabled: !!dataTask,
		select: data => data,
	})

	return (
		<div className={styles.mainWrapper}>
			<div className={styles.wrapper}>
				<h1>
					Прочитайте приведённые ниже тексты. Преобразуйте, если необходимо,
					слова, напечатанные заглавными буквами в конце строк, обозначенных
					номерами 19–24, так, чтобы они грамматически соответствовали
					содержанию текстов. Заполните пропуски полученными словами. Каждый
					пропуск соответствует отдельному заданию из группы 19–24.
				</h1>
				<div className={styles.wrapperText}>
					<div className={cn(styles.tags, 'tags')}>
						{data?.placeholders.map((placeholder, index) => (
							<div key={index}>
								<h1>{19 + index}</h1>
							</div>
						))}
					</div>
					<div className={styles.text}>
						<h1>{data?.title}</h1>
						<p>
							{data?.text.map((sentence, index) => (
								<span key={index}>
									{sentence}{' '}
									{index < data.placeholders.length && (
										<input type='text' placeholder={data.placeholders[index]} />
									)}{' '}
								</span>
							))}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Grammar_test1
