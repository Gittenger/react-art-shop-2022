import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: null,
		error: null,
	},
	reducers: {
		signInSuccess: (state, action) => ({
			...state,
			currentUser: action.payload,
			error: null,
		}),
		signOutSuccess: state => ({ ...state, currentUser: null, error: null }),
		authFailure: (state, action) => ({ ...state, error: action.payload }),
	},
})

export const { signInSuccess, signOutSuccess, authFailure } = userSlice.actions

export default userSlice.reducer
