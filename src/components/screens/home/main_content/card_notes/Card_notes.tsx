'use client'

import cn from 'classnames'
import { PenSquare } from 'lucide-react'
import { FC } from 'react'

import pencil from '@/shared/images/pencil.svg'

import Waiting_card from '@/components/ui/progress_cards/Waiting_card'
import Today_card from '@/components/ui/time_cards/Today_card'
import Button from '@/components/ui/top_bar/Button'
import Card_collection from '../card_collection/Card_collection'

import styles from './Card_notes.module.scss'

const Card_notes: FC = () => {
	return (
		<Card_collection
			className={styles.notion_card}
			src={pencil}
			alt='Картинка заметки'
			h2='Заметки'
			children2={<PenSquare className={styles.svg} />}
		>
			<div className={styles.wrapper}>
				<input
					type='checkbox'
					name=''
					value=''
					className={styles.input}
				></input>
				<span className={styles.span}></span>
				<div>
					<h2 className={styles.h2}>Выписать лексику Unit 15</h2>
					<p className={styles.h2_under}>Дополнить разделы U12-U14</p>
					<div className={styles.tags}>
						<Today_card />
						<Waiting_card />
					</div>
				</div>
			</div>
			<div className={`${styles.wrapper} ${styles.wrapper2}`}>
				<input
					type='checkbox'
					name=''
					value=''
					className={styles.input}
				></input>
				<span className={styles.span}></span>
				<div>
					<h2 className={`${styles.h2} ${styles.h2_close}`}>Opinion essays</h2>
					<p className={cn(styles.h2_finish, styles.h2_under)}>
						Write several points of view on the chosen topic.
					</p>
					<div className={styles.tags}>
						<Today_card className={styles.close} />
						<Waiting_card className={styles.close} />
					</div>
				</div>
			</div>
			<div className={styles.line}></div>
			<Button className={styles.button}>
				<PenSquare className={styles.svg} />
				<p className={styles.p}>Новая заметка</p>
			</Button>
		</Card_collection>
	)
}

export default Card_notes
