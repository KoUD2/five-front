import { GraduationCap } from 'lucide-react'
import { FC } from 'react'
import styles from './Tests.module.scss'
import Create_variant from './create_variant/Create_variant'
import Teacher_tasks from './teacher_tasks/Teacher_tasks'
import TestDay from './variants/Test_day'
import Cards_variant from './variants_cards/Cards_variant'
const Tests: FC = () => {
	return (
		<div className={styles.maimWrapper}>
			<div className={styles.wrapper}>
				<div>
					<div className='variants'>
						<TestDay link=<GraduationCap /> text='Тренировка на каждый день'>
							<Cards_variant text='Вариант 1' link='1' />
							<Cards_variant text='Вариант 2' link='2' />
							<Cards_variant text='Вариант 3' link='3' />
							<Cards_variant text='Вариант 4' link='4' />
							<Cards_variant text='Вариант 5' link='5' />
							<Cards_variant text='Вариант 6' link='6' />
						</TestDay>
					</div>
					<div className='timing'></div>
				</div>
				<Create_variant />
			</div>
			<Teacher_tasks />
		</div>
	)
}

export default Tests
