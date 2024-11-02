import img from '@/shared/images/image 4.png'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Test40.module.scss'
const Test40: FC = () => {
	return (
		<div className={styles.mainWrapper}>
			<div className={styles.mainContent}>
				<div className={styles.numText}>
					<div className={styles.numTask}>
						<h1>40</h1>
					</div>
					<h1>Study the advertisement.</h1>
				</div>
				<div className={styles.wrapper}>
					<Image src={img} alt='' />
					<div className={styles.texts}>
						<p>
							You are considering visiting the city and now you'd like to get
							more information. In 1.5 minutes you are to ask four direct
							questions to find out the following:
						</p>
						<div>
							<p>1) dates for departures</p>
							<p>2)  hotel facilities</p>
							<p>3)  if breakfast is included</p>
							<p>4)  number of city tours</p>
						</div>
					</div>
					<div className={styles.pleer}></div>
				</div>
			</div>
		</div>
	)
}

export default Test40
