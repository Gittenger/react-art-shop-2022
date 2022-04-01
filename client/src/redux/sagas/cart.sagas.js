import { all, call, put, takeLatest } from 'redux-saga/effects'
import { cartSlice } from '../slices/cart.slice.js'
import { userSlice } from '../slices/user.slice.js'

const { actions } = cartSlice

export function* clearCartItems() {
	yield put(actions.clearCart())
}

export function* onSignOutSuccess() {
	yield takeLatest(userSlice.actions.signOutSuccess().type, clearCartItems)
}

export function* onCheckoutSuccess() {
	yield takeLatest(actions.checkoutSuccess().type, clearCartItems)
}

export default function* cartSagas() {
	yield all([call(onSignOutSuccess), call(onCheckoutSuccess)])
}
