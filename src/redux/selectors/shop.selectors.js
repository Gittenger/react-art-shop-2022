import { createSelector } from '@reduxjs/toolkit'

const selectShop = state => state.shop

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
	[selectCollections],

	// convert collections obj to array
	collections =>
		collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectShopCollection = urlParam =>
	createSelector(
		[selectCollections],

		// urlParam is key for collection
		collections => (collections ? collections[urlParam] : {})
	)
