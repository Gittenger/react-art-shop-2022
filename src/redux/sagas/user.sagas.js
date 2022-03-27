import { all, put, call, takeLatest } from 'redux-saga/effects'
import { userSlice } from '../slices/user.slice.js'

const { actions } = userSlice

export function* getSnapshotFromUser(user, otherData) {
	try {
		let createUserProfileDoc = function () {}
		// createUserProfileDoc from firebase utils

		let userRef = yield call(createUserProfileDoc, user, otherData)
		let snapshot = yield userRef.get()

		yield put(actions.signInSuccess({ id: snapshot.id, ...snapshot.data() }))
	} catch (error) {
		yield put(actions.authFailure(error.message))
	}
}

export function* signInWithEmail({ payload: { email, password } }) {
	try {
		// auth module import from firebase utils, return obj with user
		let auth
		const { user } = yield auth.signInWithEmail(email, password)
		yield getSnapshotFromUser(user)
	} catch (error) {
		yield put(actions.authFailure(error.message))
	}
}

export function* onEmailSignInStart() {
	yield takeLatest(actions.emailSignInStart, signInWithEmail)
}

export default function* userSagas() {
	yield all([call(onEmailSignInStart)])
}
