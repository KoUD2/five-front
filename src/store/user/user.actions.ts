// export const register = createAsyncThunk<IAuthResponse, InterfaceEmailPassword>(
// 	'auth/register',
// 	async ({ firstName, email, password }, thunkAPI) => {
// 		try {
// 			const response = await authService.register(firstName, email, password)
// 			console.log(response.data)
// 			return response.data
// 		} catch (error) {
// 			return thunkAPI.rejectWithValue(error)
// 		}
// 	}
// )

// export const login = createAsyncThunk<IAuthResponse, InterfaceEmailPassword>(
// 	'auth/login',
// 	async ({ firstName, email, password }, thunkAPI) => {
// 		try {
// 			const response = await AuthService.login(firstName, email, password)
// 			return response.data
// 		} catch (error) {
// 			return thunkAPI.rejectWithValue(error)
// 		}
// 	}
// )

// export const logout = createAsyncThunk('auth/logout', async () => {
// 	await AuthService.logout()
// })

// export const checkAuth = createAsyncThunk<IAuthResponse>(
// 	'auth/check-auth',
// 	async (_, thunkAPI) => {
// 		try {
// 			const response = await AuthService.getNewTokens()
// 			return response.data
// 		} catch (error) {
// 			if (errorCatch(error) === 'jwt expired') {
// 				thunkAPI.dispatch(logout())
// 			}
// 			return thunkAPI.rejectWithValue(error)
// 		}
// 	}
// )
