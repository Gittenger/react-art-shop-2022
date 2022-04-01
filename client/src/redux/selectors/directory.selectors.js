import { createSelector } from '@reduxjs/toolkit'

const selectDirectory = state => state.directory

export const selectDirectorySections = createSelector(
	[selectDirectory],
	({ sections }) => {
		return sections ? Object.keys(sections).map(key => sections[key]) : []
	}
)
