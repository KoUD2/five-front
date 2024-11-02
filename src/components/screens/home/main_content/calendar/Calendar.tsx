import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'
import Button from '@/components/ui/top_bar/Button'
import { useDebounce } from '@/hooks/useDebounce'
import { DeadlineService } from '@/services/deadlines/deadline.service'
import arrow from '@/shared/images/chevron_forward.svg'
import { toUpper } from '@/shared/toUpper'
import { ICard } from '@/shared/types/deadline.types'
import { useQuery } from '@tanstack/react-query'
import moment from 'moment'
import 'moment/locale/ru'
import Image from 'next/image'
import { FC, useState } from 'react'
import styles from './Calendar.module.scss'
import Date from './date/Date'
import Deadline_card from './deadline_card/Deadline_card'
import Module from './modules/Module'
import Search_my from './search/Search'
import Subject from './subject/Subject'

const Calendar: FC = () => {
	const [value, setValue] = useState('')
	const handleChange = (value: string) => {
		setValue(value)
	}
	const [day, setDay] = useState(moment())
	const debouncedSearch = useDebounce(day.format('D MMMM'), 500)
	const debouncedSearch2 = useDebounce(value, 500)
	const { data, isLoading, error } = useQuery({
		queryKey: ['card-title', debouncedSearch],
		queryFn: () => DeadlineService.getAll(debouncedSearch),
		select: data => data.slice(0, 3),
		enabled: !!debouncedSearch,
	})

	const der = useQuery({
		queryKey: ['deadline-title', debouncedSearch2],
		queryFn: () => DeadlineService.getAll(debouncedSearch2),
		select: (data: ICard[]) => data.slice(0, 3),
		enabled: !!debouncedSearch2,
	})

	return (
		<div className={styles.containers}>
			<div className={styles.wrapper}>
				<Button
					className={styles.button}
					onClick={() => setDay(day.clone().subtract(1, 'month'))}
				>
					<Image
						src={arrow}
						alt='Картинка стрелки назад'
						className={styles.arrow}
					/>
				</Button>
				<h2>{toUpper(day.format('MMMM, YYYY'))}</h2>
				<Button
					className={styles.button}
					onClick={() => setDay(day.clone().add(1, 'month'))}
				>
					<Image src={arrow} alt='Картинка стрелки вперёд' />
				</Button>
			</div>
			<div className={styles.dates}>
				<Button
					className={styles.button2}
					onClick={() => setDay(day.clone().subtract(1, 'day'))}
				>
					<Image
						src={arrow}
						alt='Картинка стрелки назад'
						className={styles.arrow}
					/>
				</Button>
				<Date
					date_name={toUpper(day.clone().subtract(2, 'day').format('dd'))}
					date_num={day.clone().subtract(2, 'day').format('D')}
				/>
				<Date
					date_name={toUpper(day.clone().subtract(1, 'day').format('dd'))}
					date_num={day.clone().subtract(1, 'day').format('D')}
				/>
				<Date
					date_name={toUpper(day.clone().format('dd'))}
					date_num={day.clone().format('D')}
					className={styles.date_color}
					className2={styles.wrapper_date_color}
				/>
				<Date
					date_name={toUpper(day.clone().add(1, 'day').format('dd'))}
					date_num={day.clone().add(1, 'day').format('D')}
				/>
				<Date
					date_name={toUpper(day.clone().add(2, 'day').format('dd'))}
					date_num={day.clone().add(2, 'day').format('D')}
				/>
				<Button
					className={styles.button2}
					onClick={() => setDay(day.clone().add(1, 'day'))}
				>
					<Image src={arrow} alt='Картинка стрелки назад' />
				</Button>
			</div>
			<Search_my onChange={handleChange} />
			<Module />
			<div className={styles.deadline}>
				{value.length > 0 ? (
					der.data?.map(card => (
						<Deadline_card
							key={card.title}
							link={card.link}
							className2={styles.h2_3}
							className3={styles.timing_3}
							className5={styles.button_custom_1}
							className4={styles.arrow_custom_3}
							className6={styles.count_person_3}
							className={styles.dead3}
							name={card.title}
							done='Пройти тест'
							time={`${card.date} ${card.time}`}
						>
							<Subject className={styles.content1} h2='Английский' />
						</Deadline_card>
					))
				) : isLoading ? (
					<SkeletonLoader count={3} className='h-28 mb-4' />
				) : data?.length ? (
					data.map(card => (
						<Deadline_card
							key={card.title}
							link={card.link}
							className2={styles.h2_3}
							className3={styles.timing_3}
							className5={styles.button_custom_1}
							className4={styles.arrow_custom_3}
							className6={styles.count_person_3}
							className={styles.dead3}
							name={card.title}
							done='Пройти тест'
							time={`${card.date} ${card.time}`}
						>
							<Subject className={styles.content1} h2='Английский' />
						</Deadline_card>
					))
				) : (
					<div className={styles.no}>
						<p>Дедлайнов нет</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default Calendar
