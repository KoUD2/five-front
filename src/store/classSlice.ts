import { IClass } from '@/shared/types/class/class.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ClassState {
	selectedClass: IClass | null
	selectedClasses: IClass[]
	createClassForms: number[]
}

const initialState: ClassState = {
	selectedClass: null,
	selectedClasses: [],
	createClassForms: [],
}

const classSlice = createSlice({
	name: 'class',
	initialState,
	reducers: {
		setSelectedClass(state, action: PayloadAction<IClass>) {
			state.selectedClass = action.payload
		},
		addSelectedClass(state, action: PayloadAction<IClass>) {
			if (
				!state.selectedClasses.find(cls => cls.hashId === action.payload.hashId)
			) {
				state.selectedClasses.push(action.payload)
			}
		},
		removeSelectedClass(state, action: PayloadAction<string>) {
			state.selectedClasses = state.selectedClasses.filter(
				cls => cls.hashId !== action.payload
			)
		},
		addCreateClassForm(state) {
			state.createClassForms.push(Date.now())
		},
		removeCreateClassForm(state, action: PayloadAction<number>) {
			state.createClassForms = state.createClassForms.filter(
				formId => formId !== action.payload
			)
		},
	},
})

export const {
	setSelectedClass,
	addSelectedClass,
	removeSelectedClass,
	addCreateClassForm,
	removeCreateClassForm,
} = classSlice.actions
export default classSlice.reducer
