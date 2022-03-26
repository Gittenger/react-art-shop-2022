import { configureStore } from '@reduxjs/toolkit'
import directorySlice from './slices/directory.slice'
import cartSlice from './slices/cart.slice'
import shopSlice from './slices/shop.slice'
import userSlice from './slices/user.slice'

import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './sagas/_root.saga'

const sagaMiddleware = createSagaMiddleware()

export default function store() {
	const store = configureStore({
		reducer: {
			directory: directorySlice,
			cart: cartSlice,
			shop: shopSlice,
			user: userSlice,
		},
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
	})
	sagaMiddleware.run(rootSaga)
	return store
}
