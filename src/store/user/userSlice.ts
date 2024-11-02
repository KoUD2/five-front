import { IUser } from '@/shared/types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
	selectedUser: IUser | null
	selectedUsers: IUser[]
}

const initialState: UserState = {
	selectedUser: null,
	selectedUsers: [],
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setSelectedUser(state, action: PayloadAction<IUser>) {
			state.selectedUser = action.payload
		},
		addSelectedUser(state, action: PayloadAction<IUser>) {
			if (
				!state.selectedUsers.find(user => user.hashId === action.payload.hashId)
			) {
				state.selectedUsers.push(action.payload)
			}
		},
		removeSelectedUser(state, action: PayloadAction<string>) {
			state.selectedUsers = state.selectedUsers.filter(
				user => user.hashId !== action.payload
			)
		},
	},
})

export const { setSelectedUser, addSelectedUser, removeSelectedUser } =
	userSlice.actions
export default userSlice.reducer
