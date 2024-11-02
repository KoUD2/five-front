'use client'

import TasksChoice from '@/components/ui/choose_tasks/TasksChoice'
import TasksFinalOptional from '@/components/ui/tasks_final/TasksFinalOptional'
import { TaskProvider } from '@/providers/TaskContext/TaskContext'
import { FC } from 'react'
import styles from './CreateTasks.module.scss'

const Create_task_page: FC = () => {
	return (
		<TaskProvider>
			<div className={styles.wrapper}>
				<TasksChoice />
				<TasksFinalOptional />
			</div>
		</TaskProvider>
	)
}

export default Create_task_page
