import { useTask } from '@/providers/TaskContext/TaskContext'
import { FC } from 'react'
import styles from './TasksFinal.module.scss'
import ButtonCreateTest from './button-start-test/ButtonCreateTest'
import TaskDecision from './task-decision/TaskDecision'

const TasksFinalOptional: FC = () => {
	const { selectedTasks, incrementTask, decrementTask, removeTask } = useTask()

	const tasksArray = Object.entries(selectedTasks).map(([task, count]) => ({
		task,
		count,
	}))

	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperHeader}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<path d='M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6' />
					<path d='m21 3-9 9' />
					<path d='M15 3h6v6' />
				</svg>
				<h2>Выбранные задания</h2>
			</div>
			<div className={styles.wrapperChoise}>
				{tasksArray.length === 0 ? (
					<div className={styles.firstChoise}>
						<p>Добавьте задание из списка слева</p>
					</div>
				) : (
					<div className={styles.tasksList}>
						{tasksArray.map(({ task, count }, index) => (
							<TaskDecision
								key={index}
								task={task}
								count={count}
								incrementTask={() => incrementTask(task)}
								decrementTask={() => decrementTask(task)}
								removeTask={() => removeTask(task)}
							/>
						))}
					</div>
				)}
			</div>
			{tasksArray.length === 0 ? (
				''
			) : (
				<div className={styles.buttonsStart}>
					<ButtonCreateTest />
				</div>
			)}
		</div>
	)
}

export default TasksFinalOptional
