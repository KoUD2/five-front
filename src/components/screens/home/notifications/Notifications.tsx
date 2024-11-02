'use client'

import { GraduationCap, Zap } from 'lucide-react'
import { FC } from 'react'

import Button from '@/components/ui/top_bar/Button'

import styles from './Notifications.module.scss'
import { animation_pick_selectors } from './aniamtion_pick_selectors'
import { animation_slide } from './animation_slide'
import Notification from './notification/Notification'

const Notifications: FC = () => {
	animation_slide()
	animation_pick_selectors()
	return (
		<>
			<div className={styles.wrapper} id='wrapper'></div>
			<div className={styles.notification_wrapper} id='notification_wrapper'>
				<h1>Уведомления</h1>
				<div className={styles.buttons}>
					<Button className={styles.button} id='all'>
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
						>
							<path d='M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z' />
						</svg>
						Все
					</Button>
					<Button className={styles.button} id='teacher'>
						<GraduationCap /> Преподаватель
					</Button>
					<Button className={styles.button} id='ai'>
						<Zap /> ИИ
					</Button>
					<Button className={styles.button} id='company'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='none'
						>
							<g clipPath='url(#clip0_187_1332)'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M12.6185 0.27567C12.2883 -0.0918905 11.7122 -0.0918899 11.382 0.275671L8.74998 3.20544C8.58167 3.39279 8.33749 3.49371 8.08603 3.47985L4.14662 3.26283C3.6521 3.23559 3.24366 3.64419 3.2711 4.13869L3.48852 8.05766C3.50253 8.31025 3.40074 8.55547 3.21196 8.72387L0.277836 11.3413C-0.0926119 11.6718 -0.0926119 12.2512 0.277836 12.5817L3.21196 15.1992C3.40074 15.3676 3.50253 15.6128 3.48852 15.8654L3.2711 19.7843C3.24366 20.2789 3.6521 20.6874 4.14662 20.6602L8.08603 20.4432C8.33749 20.4293 8.58167 20.5303 8.74998 20.7176L11.382 23.6474C11.7122 24.0149 12.2883 24.0149 12.6185 23.6474L15.2505 20.7176C15.4189 20.5303 15.663 20.4293 15.9145 20.4432L19.8539 20.6602C20.3484 20.6874 20.7569 20.2789 20.7294 19.7843L20.512 15.8654C20.498 15.6128 20.5998 15.3676 20.7886 15.1992L23.7227 12.5817C24.0931 12.2512 24.0931 11.6718 23.7227 11.3413L20.7886 8.72387C20.5998 8.55547 20.498 8.31025 20.512 8.05766L20.7294 4.13869C20.7569 3.64419 20.3484 3.23559 19.8539 3.26283L15.9145 3.47985C15.663 3.49371 15.4188 3.39279 15.2505 3.20544L12.6185 0.27567ZM12.5582 3.79468C12.2866 3.40794 11.7134 3.40794 11.4418 3.79468L9.90725 5.97925C9.75513 6.19579 9.49151 6.30483 9.23087 6.25899L6.59588 5.79559C6.12946 5.71356 5.72341 6.1201 5.806 6.58642L6.26985 9.20545C6.3162 9.46712 6.20636 9.7319 5.9884 9.88393L3.80215 11.4089C3.41294 11.6804 3.41294 12.2564 3.80215 12.5279L5.9884 14.0529C6.20636 14.2049 6.3162 14.4697 6.26985 14.7313L5.806 17.3504C5.72341 17.8167 6.12946 18.2232 6.59588 18.1412L9.23087 17.6778C9.4915 17.632 9.75513 17.741 9.90725 17.9575L11.4418 20.1421C11.7134 20.5289 12.2866 20.5289 12.5582 20.1421L14.0928 17.9575C14.2449 17.741 14.5085 17.632 14.7691 17.6778L17.4041 18.1412C17.8705 18.2232 18.2766 17.8167 18.194 17.3504L17.7301 14.7313C17.6838 14.4697 17.7936 14.2049 18.0116 14.0529L20.1979 12.5279C20.5871 12.2564 20.5871 11.6804 20.1979 11.4089L18.0116 9.88393C17.7936 9.7319 17.6838 9.46713 17.7301 9.20545L18.194 6.58642C18.2766 6.1201 17.8705 5.71356 17.4041 5.79559L14.7691 6.25899C14.5085 6.30483 14.2449 6.19579 14.0928 5.97925L12.5582 3.79468Z'
									fill='black'
								/>
							</g>
							<defs>
								<clipPath id='clip0_187_1332'>
									<rect width='24' height='24' fill='white' />
								</clipPath>
							</defs>
						</svg>
						Fife
					</Button>
				</div>
				<div className={styles.messages}>
					<Notification className={styles.now_card} />
					<Notification className={styles.now_card} />
					<Notification className={styles.now_card} />
					<Notification />
					<Notification />
					<Notification />
					<Notification />
					<Notification />
				</div>
			</div>
		</>
	)
}

export default Notifications
