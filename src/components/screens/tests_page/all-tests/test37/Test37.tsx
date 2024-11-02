import { Task37Service } from '@/services/tasks/tasks/task37.service'
import { ITask37 } from '@/shared/types/tasks/task37.types'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import styles from './Test37.module.scss'
const Test37: FC<{ dataTask: string | undefined }> = ({ dataTask }) => {
	const { data } = useQuery<ITask37>({
		queryKey: ['card-title', dataTask],
		queryFn: () => Task37Service.getAll(dataTask),
		enabled: !!dataTask,
	})

	return (
		<div className={styles.mainWrapper}>
			<div className={styles.numTask}>
				<h1>37</h1>
			</div>
			<div className={styles.wrapper}>
				<h1>
					You have received an email message from your English-speaking
					pen-friend Polly:
				</h1>
				<div className={styles.letter}>
					<h2>From: Polly@mail.uk</h2>
					<h2>To: Russian_friend@ege.ru</h2>
					<h2>Subject: {data?.subject}</h2>
					<p>{data?.emailText}</p>
				</div>
				<div className={styles.questions}>
					<p>
						Write an email to Polly. <br />
						In your message:
					</p>
					<p className={styles.questionsP}>
						— answer her questions <br />— ask 3 questions {data?.question}.
					</p>
					<p>
						Write 100−140 words. <br />
						Remember the rules of email writing.
					</p>
				</div>
				<textarea
					placeholder='Напишите текст эссе...'
					rows={4}
					cols={50}
				></textarea>
			</div>
		</div>
	)
}

export default Test37
