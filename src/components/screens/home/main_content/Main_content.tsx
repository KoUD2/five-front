import { BookOpen, Monitor } from 'lucide-react'
import { FC } from 'react'

import src_card_one from '@/shared/images/book.svg'
import src_card_two from '@/shared/images/tv_and_mediabox.svg'

import styles from './Main_content.module.scss'
import Card_collection from './card_collection/Card_collection'
import Card_notes from './card_notes/Card_notes'
import Card_practise from './card_practise/Card_practise'
import Card_progress from './card_progress/Card_progress'
import Card_time from './card_time/Card_time'

const Main_content: FC = () => {
	return (
		<div className={styles.main_wrapper}>
			<div className={styles.container}>
				<div>
					<Card_collection
						className=""
						src={src_card_one}
						alt="Картинка подборка книг"
						h2="Подборка книг"
						children2={<BookOpen className={styles.svg} />}
					>
						<div className={styles.plot}>
							<h1>Вселенная Стивена Кинга</h1>
							<p>
								The shinning, Pet Sematary, IT, Carrie, Salem’s lot, Thinner,
								Night shift
							</p>
							<h1 className={styles.last_h1}>
								Серия книг Куриный бульон для души
							</h1>
							<p>
								All you need id love, Kindness matters, The advice that changed
								my life, The original Chicken soup for the soul
							</p>
						</div>
					</Card_collection>
					<Card_collection
						className=""
						src={src_card_two}
						alt="Картинка подборка фильмов"
						h2="Подборка фильмов"
						children2={<Monitor className={styles.svg} />}
					>
						<div className={styles.plot}>
							<h1>Фильмы про Хэллоуин</h1>
							<p>
								The witches of Eastwick, Beetlejuice, The withes, Casper, Hocus
								Pocus, Halloweentown, Practical magic, Dark Shadows,
								Ghostbusters
							</p>
							<h1 className={styles.last_h1}>Уютные фильмы</h1>
							<p>
								Life as we know it, Catch me if you can, Dirty Dancing , Dead
								poets society
							</p>
						</div>
					</Card_collection>
				</div>
				<div className={styles.second_part}>
					<Card_practise />
					<div className={styles.div3}>
						<Card_notes />
						<Card_progress />
					</div>
				</div>
			</div>
			<Card_time />
		</div>
	)
}

export default Main_content
