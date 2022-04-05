import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import directorySlice from './slices/directory.slice'
import cartSlice from './slices/cart.slice'
import shopSlice from './slices/shop.slice'
import userSlice from './slices/user.slice'
import { signUpSuccess } from './slices/user.slice.js'

import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './sagas/_root.saga'
import {
	persistReducer,
	persistStore,
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
	directory: directorySlice,
	cart: cartSlice,
	shop: shopSlice,
	user: userSlice,
})

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			thunk: false,
			serializableCheck: {
				ignoredActions: [
					signUpSuccess().type,
					FLUSH,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
					REHYDRATE,
				],
			},
		}).concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
export default store
