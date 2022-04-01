import { configureStore } from '@reduxjs/toolkit'
import directorySlice from './slices/directory.slice'
import cartSlice from './slices/cart.slice'
import shopSlice from './slices/shop.slice'
import userSlice from './slices/user.slice'
import { signUpSuccess } from './slices/user.slice.js'

import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './sagas/_root.saga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
	reducer: {
		directory: directorySlice,
		cart: cartSlice,
		shop: shopSlice,
		user: userSlice,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			thunk: false,
			serializableCheck: {
				ignoredActions: [signUpSuccess().type],
			},
		}).concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga)
export default store
