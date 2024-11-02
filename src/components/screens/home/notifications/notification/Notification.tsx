import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'

import logo_ai from '@/shared/images/ai_logo.svg'

import styles from './Notification.module.scss'

const Notification: FC<{ className?: any }> = ({ className }) => {
	return (
		<div className={cn(styles.wrapper, className)}>
			<Image
				src={logo_ai}
				alt="Картинка пользователя"
				draggable="false"
			></Image>
			<div className={styles.info}>
				<h1>
					<span>Мария Ивановна</span> опубликовала{' '}
					<span>Задания на неделю</span>
				</h1>
				<div className={styles.time_subject}>
					<p className={styles.subject}>Английский язык</p>
					<div className={styles.time}>
						<div></div>
						<p>30 минут назад</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Notification
