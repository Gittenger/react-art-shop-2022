import { all, put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { userSlice } from '../slices/user.slice.js'

const { actions } = userSlice
let auth
let getCurrentUser
let googleProvider

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

export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider)
		yield getSnapshotFromUser(user)
	} catch (error) {
		yield put(actions.authFailure(error.message))
	}
}

export function* onGoogleSignInStart() {
	yield takeEvery(actions.googleSignInStart().type, signInWithGoogle)
}

export function* signInWithEmail({ payload: { email, password } }) {
	try {
		// auth module import from firebase utils, return obj with user
		const { user } = yield auth.signInWithEmail(email, password)
		yield getSnapshotFromUser(user)
	} catch (error) {
		yield put(actions.authFailure(error.message))
	}
}

export function* onEmailSignInStart() {
	yield takeLatest(actions.emailSignInStart().type, signInWithEmail)
}

export function* signUp({ payload: { displayName, email, password } }) {
	try {
		const { user } = yield auth.createUserWithEmail(email, password)
		yield put(actions.signUpSuccess({ user, otherData: { displayName } }))
	} catch (error) {
		yield put(actions.authFailure(error))
	}
}

export function* onSignUpStart() {
	yield takeLatest(actions.signUpStart().type, signUp)
}

export function* onSignUpSuccess() {
	yield takeLatest(actions.signUpSuccess().type, signInAfterSignUp)
}

export function* signInAfterSignUp({ payload: { user, otherData } }) {
	yield getSnapshotFromUser(user, otherData)
}

export function* checkUserAuth() {
	try {
		// firebase import
		const user = yield getCurrentUser()
		if (!user) return
		yield getSnapshotFromUser(user)
	} catch (error) {
		yield put(actions.authFailure(error))
	}
}

export function* onCheckUserAuth() {
	yield takeEvery(actions.checkUserAuth().type, checkUserAuth)
}

export function* signOut() {
	try {
		yield auth.signOut()
		yield put(actions.signOutSuccess())
	} catch (error) {
		yield put(actions.authFailure(error.message))
	}
}

export function* onSignOutStart() {
	yield takeLatest(actions.signOutStart().type, signOut)
}

export default function* userSagas() {
	yield all([
		call(onEmailSignInStart),
		call(onGoogleSignInStart),
		call(onCheckUserAuth),
		call(onSignOutStart),
		call(onSignUpStart),
		call(onSignUpSuccess),
	])
}
