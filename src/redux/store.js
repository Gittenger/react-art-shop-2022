import { configureStore } from '@reduxjs/toolkit'
import directorySlice from './slices/directory.slice'
import cartSlice from './slices/cart.slice'
import shopSlice from './slices/shop.slice'
import userSlice from './slices/user.slice'

export default configureStore({
	reducer: {
		directory: directorySlice,
		cart: cartSlice,
		shop: shopSlice,
		user: userSlice,
	},
})
