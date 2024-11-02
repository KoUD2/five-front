import React, { createContext, ReactNode, useContext, useReducer } from 'react'

interface TaskContextType {
	tasks: { [key: string]: number }
	selectedTasks: { [key: string]: number }
	incrementTask: (task: string) => void
	decrementTask: (task: string) => void
	addTask: (task: string) => void
	removeTask: (task: string) => void
	selectTask: (task: string) => void
}

type CombinedState = {
	tasks: { [key: string]: number }
	selectedTasks: { [key: string]: number }
}

type TaskAction =
	| { type: 'INCREMENT'; task: string }
	| { type: 'DECREMENT'; task: string }
	| { type: 'ADD_TASK'; task: string }
	| { type: 'REMOVE_TASK'; task: string }
	| { type: 'SELECT_TASK'; task: string }

type CombinedAction = TaskAction

const TaskContext = createContext<TaskContextType | undefined>(undefined)

interface TaskProviderProps {
	children: ReactNode
}

const combinedReducer = (
	state: CombinedState,
	action: CombinedAction
): CombinedState => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				selectedTasks: {
					...state.selectedTasks,
					[action.task]: (state.selectedTasks[action.task] || 0) + 1,
				},
			}
		case 'DECREMENT':
			return {
				...state,
				selectedTasks: {
					...state.selectedTasks,
					[action.task]: Math.max(
						(state.selectedTasks[action.task] || 1) - 1,
						0
					),
				},
			}
		case 'ADD_TASK':
			return {
				...state,
				selectedTasks: {
					...state.selectedTasks,
					[action.task]: (state.selectedTasks[action.task] || 0) + 1,
				},
			}
		case 'REMOVE_TASK':
			const { [action.task]: removed, ...restSelectedTasks } =
				state.selectedTasks
			return {
				...state,
				selectedTasks: restSelectedTasks,
			}
		case 'SELECT_TASK':
			return {
				...state,
				selectedTasks: {
					...state.selectedTasks,
					[action.task]: (state.selectedTasks[action.task] || 0) + 1,
				},
			}
		default:
			return state
	}
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
	const [state, dispatch] = useReducer(combinedReducer, {
		tasks: {},
		selectedTasks: {},
	})

	const incrementTask = (task: string) => {
		dispatch({ type: 'INCREMENT', task })
	}

	const decrementTask = (task: string) => {
		dispatch({ type: 'DECREMENT', task })
	}

	const addTask = (task: string) => {
		dispatch({ type: 'ADD_TASK', task })
	}

	const removeTask = (task: string) => {
		dispatch({ type: 'REMOVE_TASK', task })
	}

	const selectTask = (task: string) => {
		dispatch({ type: 'SELECT_TASK', task })
	}

	return (
		<TaskContext.Provider
			value={{
				tasks: state.tasks,
				selectedTasks: state.selectedTasks,
				incrementTask,
				decrementTask,
				addTask,
				removeTask,
				selectTask,
			}}
		>
			{children}
		</TaskContext.Provider>
	)
}

export const useTask = () => {
	const context = useContext(TaskContext)
	if (!context) {
		throw new Error('useTask must be used within a TaskProvider')
	}
	return context
}
