import Grammar_test2 from '@/components/screens/tests/create_tasks/create_all_tests/grammar_test2/Grammar_test2'
import { useTask } from '@/providers/TaskContext/TaskContext'
import cn from 'classnames'
import { FC } from 'react'
import ButtonTask from './buttonTask/ButtonTask'
import SectionName from './section/SectionName'
import styles from './TasksChoice.module.scss'

const TasksChoice: FC = () => {
	const { selectTask } = useTask()

	const tasksSection1 = Array.from({ length: 9 }, (_, i) => `Задание ${i + 1}`)
	const tasksSection2 = Array.from({ length: 9 }, (_, i) => `Задание ${i + 10}`)
	const tasksSection3 = Array.from(
		{ length: 18 },
		(_, i) => `Задание ${i + 19}`
	)
	const tasksSection4 = Array.from({ length: 2 }, (_, i) => `Задание ${i + 37}`)

	return (
		<div className={styles.wrapper}>
			<div className={styles.center}>
				<SectionName h1='Раздел 1. Аудирование' />
				<div className={styles.wrapperTasks}>
					{tasksSection1.map((task, index) => (
						<ButtonTask
							key={index}
							text={task}
							onClick={() => selectTask(task)}
						/>
					))}
				</div>
			</div>
			<div className={cn(styles.sectionValues, styles.center)}>
				<SectionName h1='Раздел 2. Чтение' />
				<div className={styles.wrapperTasks}>
					{tasksSection2.map((task, index) => (
						<ButtonTask
							key={index}
							text={task}
							onClick={() => selectTask(task)}
						/>
					))}
				</div>
			</div>
			<div className={cn(styles.sectionValues, styles.center)}>
				<SectionName h1='Раздел 3. Грамматика' />
				<div className={styles.wrapperTasks}>
					{tasksSection3.map((task, index) => (
						<ButtonTask
							key={index}
							text={task}
							onClick={() => selectTask(task)}
						/>
					))}
				</div>
			</div>
			<div className={cn(styles.sectionValues, styles.center)}>
				<SectionName h1='Раздел 4. Письмо' />
				<div className={styles.wrapperTasks}>
					{tasksSection4.map((task, index) => (
						<ButtonTask
							key={index}
							text={task}
							onClick={() => selectTask(task)}
						/>
					))}
				</div>
			</div>
			<div className={cn(styles.sectionValues, styles.center)}>
				<SectionName h1='Раздел 5. Говорение' />
				<div className={cn(styles.wrapperTasks, styles.inProgress)}>
					<p>В разработке</p>
				</div>
				<Grammar_test2 />
			</div>
		</div>
	)
}

export default TasksChoice
