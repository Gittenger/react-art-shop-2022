import { createSlice } from '@reduxjs/toolkit'
// import collections from '../shop.data'

export const shopSlice = createSlice({
	name: 'shop',
	initialState: {
		collections: null,
		isFetching: false,
		errorMessage: undefined,
	},
	reducers: {
		fetchCollectionsStart: state => ({ ...state, isFetching: true }),
		fetchCollectionsSuccess: (state, action) => ({
			...state,
			collections: action.payload,
			isFetching: false,
		}),
		fetchCollectionsFailure: (state, action) => ({
			...state,
			isFetching: false,
			errorMessage: action.payload,
		}),
	},
})

export const {
	fetchCollectionsStart,
	fetchCollectionsSuccess,
	fetchCollectionsFailure,
} = shopSlice.actions

export default shopSlice.reducer
