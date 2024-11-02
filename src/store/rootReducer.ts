import { combineReducers } from '@reduxjs/toolkit'
import { reducer as toastrReducer } from 'react-redux-toastr'
import classReducer from './classSlice'

const rootReducer = combineReducers({
	class: classReducer,
	toastr: toastrReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
