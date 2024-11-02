import Button from '@/components/ui/top_bar/Button'
import { FC } from 'react'
import styles from './Cards_variant.module.scss'

const Cards_variant: FC<{ link: string; text: string }> = ({ link, text }) => {
	return (
		<div>
			<a href={`/tests/${link}`} className={styles.link}>
				<Button className={styles.button}>
					<div className={styles.name}>
						<h1>{text}</h1>
						<div className={styles.progress}></div>
					</div>
					<div className={styles.wrapperProgress}>
						<div className={styles.partProgress}></div>
						<div className={styles.partProgress}></div>
						<div className={styles.partProgress}></div>
						<div className={styles.partProgress}></div>
					</div>
				</Button>
			</a>
		</div>
	)
}

export default Cards_variant
