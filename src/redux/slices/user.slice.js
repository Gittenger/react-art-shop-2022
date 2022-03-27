import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
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

		// saga actions
		// payload
		signUpStart: (state, action) => state,
		signUpSuccess: (state, action) => state,
		emailSignInStart: (state, action) => state,

		// no payload
		googleSignInStart: state => state,
		checkUserAuth: state => state,
		signOutStart: state => state,
	},
})

export const {
	signInSuccess,
	signOutSuccess,
	authFailure,
	signUpStart,
	signUpSuccess,
	emailSignInStart,
	googleSignInStart,
	checkUserAuth,
	signOutStart,
} = userSlice.actions

export default userSlice.reducer
