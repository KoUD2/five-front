import { FC } from 'react'
import styles from './TaskDecision.module.scss'

interface TaskDecisionProps {
	task: string
	count: number
	incrementTask: () => void
	decrementTask: () => void
	removeTask: () => void
}

const TaskDecision: FC<TaskDecisionProps> = ({
	task,
	count,
	incrementTask,
	decrementTask,
	removeTask,
}) => {
	return (
		<div className={styles.wrapper}>
			<h1>{task}</h1>
			<div>
				<div className={styles.allButtons}>
					<div
						className={styles.minus}
						onClick={() => {
							decrementTask()
						}}
					>
						<div></div>
					</div>
					<div className={styles.number}>
						<h2>{count}</h2>
					</div>
					<div
						className={styles.plus}
						onClick={() => {
							incrementTask()
						}}
					>
						<div></div>
						<div></div>
					</div>
				</div>
				<div className={styles.trashIcon}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='21'
						height='22'
						viewBox='0 0 21 22'
						fill='none'
						onClick={removeTask} // Add onClick handler
					>
						<path
							d='M1.61523 5.5H19.7883'
							stroke='#EB5931'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M17.7694 5.5V19.25C17.7694 20.2321 16.7598 21.2143 15.7502 21.2143H5.654C4.64438 21.2143 3.63477 20.2321 3.63477 19.25V5.5'
							stroke='#EB5931'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M6.66357 5.49998V3.5357C6.66357 2.55355 7.67319 1.57141 8.68281 1.57141H12.7213C13.7309 1.57141 14.7405 2.55355 14.7405 3.5357V5.49998'
							stroke='#EB5931'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M8.68262 10.4107V16.3036'
							stroke='#EB5931'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M12.7212 10.4107V16.3036'
							stroke='#EB5931'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
			</div>
		</div>
	)
}

export default TaskDecision
