import img from '@/shared/images/image 5.png'
import img2 from '@/shared/images/image 6.png'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Test42.module.scss'
const Test42: FC = () => {
	return (
		<div className={styles.mainWrapper}>
			<div className={styles.numTask}>
				<h1>42</h1>
			</div>
			<div className={styles.mainContent}>
				<h1 className={styles.heading}>
					Imagine that you and your friend are doing a school project “Life
					without gadgets”. You have found some illustrations and want to share
					the news. Leave a voice message to your friend. In 2.5 minutes be
					ready to:
				</h1>
				<h1 className={styles.include}>
					— explain the choice of the illustrations for the project by briefly
					describing them and noting the differences; <br />— mention the
					advantages (1−2) of the two types of books; <br />— mention the
					disadvantages (1−2) of the two types of books; <br />— express your
					opinion on the subject of the project <br />— whether you would like
					to live without gadgets and why.
				</h1>
				<h1 className={styles.headingLast}>
					You will speak for not more than 3 minutes (12−15 sentences). You have
					to talk continuously.
				</h1>
				<div className={styles.images}>
					<div>
						<p>Photo 1</p>
						<Image src={img} alt='Картинка первой фотографии' />
					</div>
					<div>
						<p>Photo 2</p>
						<Image src={img2} alt='Картинка второй фотографии' />
					</div>
				</div>
				<div className={styles.audio}></div>
			</div>
		</div>
	)
}

export default Test42
