import { createSlice } from '@reduxjs/toolkit'

import sections from '../directory.data.js'

export const directorySlice = createSlice({
	name: 'directory',
	initialState: {
		sections,
	},
	reducers: {
		defAction: state => state,
	},
})

export const { defAction } = directorySlice.actions

export default directorySlice.reducer
