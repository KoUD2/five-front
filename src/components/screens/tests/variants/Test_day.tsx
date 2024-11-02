import Button from '@/components/ui/top_bar/Button'
import arrow from '@/shared/images/chevron_forward.svg'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Test_day.module.scss'

const TestDay: FC<{ text: string; children: any; link: any }> = ({
	text,
	children,
	link,
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.buttonHeader}>
				<div className={styles.header}>
					{link}
					<h1>{text}</h1>
				</div>
				<Button className={styles.button}>
					См все
					<Image src={arrow} alt={'Кнопка "Смотреть всё"'} draggable='false' />
				</Button>
			</div>
			<div className={styles.line}></div>
			<div className={styles.cards}>{children}</div>
		</div>
	)
}

export default TestDay
