import { ScrollText } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

import link from '@/shared/images/link.svg'
import doc from '@/shared/images/square_and_pencil.svg'

import Continue_card from '@/components/ui/progress_cards/Continue_card'
import Finish_card from '@/components/ui/progress_cards/Finish_card'
import Card_collection from '../card_collection/Card_collection'

import styles from './Card_practise.module.scss'

const Card_practise: FC = () => {
	return (
		<Card_collection
			className={styles.practice_card}
			src={doc}
			alt='Картинка практика'
			h2='Практика'
			children2={<ScrollText className={styles.svg} />}
		>
			<h2 className={`${styles.header} ${styles.header2}`}>
				Тренировочные варианты
			</h2>
			<div className={styles.progress}>
				<h2 className={styles.list}>Вариант 1</h2>
				<Continue_card />
			</div>
			<div className={styles.progress}>
				<h2 className={styles.list}>Вариант 2</h2>
			</div>
			<div className={styles.progress}>
				<h2 className={styles.list}>Вариант 3</h2>
			</div>
			<h2 className={styles.header}>Эссе</h2>
			<div className={styles.progress}>
				<h2 className={styles.list}>Travelling and sightseeing</h2>
			</div>
			<div className={styles.progress}>
				<h2 className={styles.list}>
					Family problems. Friends. Problems of...
				</h2>
			</div>
			<div className={styles.progress}>
				<h2 className={styles.list}>Holidays and celebrations</h2>
				<Finish_card />
			</div>
			<h2 className={styles.header}>Дополнительная информация</h2>
			<div className={styles.link}>
				<Image src={link} alt='Приерепленный материал 1' />
				<h2 className={styles.link_text}>правила написания эссе</h2>
			</div>
			<div className={`${styles.link} ${styles.link2}`}>
				<Image src={link} alt='Приерепленный материал 1' />
				<h2 className={styles.link_text}>самая сложная тема эссе</h2>
			</div>
		</Card_collection>
	)
}

export default Card_practise
