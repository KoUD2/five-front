'use client'

import TasksChoice from '@/components/ui/choose_tasks/TasksChoice'
import TasksFinal from '@/components/ui/tasks_final/TasksFinal'
import { TaskProvider } from '@/providers/TaskContext/TaskContext'
import { FC } from 'react'
import styles from './Choose_task_page.module.scss'

const Choose_task_page: FC = () => {
	return (
		<TaskProvider>
			<div className={styles.wrapper}>
				<TasksChoice />
				<TasksFinal />
			</div>
		</TaskProvider>
	)
}

export default Choose_task_page
