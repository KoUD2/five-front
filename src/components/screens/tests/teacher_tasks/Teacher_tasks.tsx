import Button from '@/components/ui/top_bar/Button'
import arrow from '@/shared/images/chevron_forward.svg'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Teacher_tasks.module.scss'

const Teacher_tasks: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='lucide lucide-arrow-up-right-from-square'
					>
						<path d='M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6' />
						<path d='m21 3-9 9' />
						<path d='M15 3h6v6' />
					</svg>
					<h1>Выданные задания</h1>
				</div>
				<Button className={styles.button}>
					См все
					<Image src={arrow} alt={'Кнопка "Смотреть всё"'} draggable='false' />
				</Button>
			</div>
			<div className={styles.cards}></div>
		</div>
	)
}

export default Teacher_tasks
