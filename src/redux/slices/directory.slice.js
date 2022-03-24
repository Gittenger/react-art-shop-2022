import { createSlice } from '@reduxjs/toolkit'

const data = 'some-imported-data'

export const directorySlice = createSlice({
	name: 'directory',
	initialState: {
		data,
	},
	reducers: {
		defAction: state => state,
	},
})

export const { defAction } = directorySlice.actions

export default directorySlice.reducer
