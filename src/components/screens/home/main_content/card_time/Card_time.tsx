'use client'

import { CalendarCheck } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

import arrow from '@/shared/images/chevron_forward.svg'

import Button from '@/components/ui/top_bar/Button'
import Calendar from '../calendar/Calendar'

import styles from './Card_time.module.scss'

const Card_time: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.top_container}>
				<div>
					<CalendarCheck className={styles.svg} />
					<h2>Расписание</h2>
				</div>
				<Button className={styles.button}>
					См все
					<Image src={arrow} alt={'Кнопка "Смотреть всё"'} draggable='false' />
				</Button>
			</div>
			<Calendar />
		</div>
	)
}

export default Card_time
