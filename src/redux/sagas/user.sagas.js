import { all, put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { userSlice } from '../slices/user.slice.js'

import {
	signOut as firebaseSignOut,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from 'firebase/auth'
import {
	auth,
	getCurrentUser,
	createUserProfileDocument,
} from '../../firebase/firebase.utils.js'
import { getDoc } from 'firebase/firestore'

const { actions } = userSlice
let googleProvider

// pass in user data, put firestore doc data into redux & login
export function* getSnapshotFromUser(user, otherData) {
	try {
		const userRef = yield call(createUserProfileDocument, user, otherData)
		let snapshot = yield call(getDoc, userRef)

		const data = { ...snapshot.data() }
		data['createdAt'] = data.createdAt.seconds

		yield put(actions.signInSuccess({ id: snapshot.id, ...data }))
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
		const { user } = yield call(signInWithEmailAndPassword, auth, email, password)
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
		const { user } = yield call(
			createUserWithEmailAndPassword,
			auth,
			email,
			password
		)
		yield put(actions.signUpSuccess({ user, otherData: { displayName } }))
	} catch (error) {
		console.error(error.message)
		yield put(actions.authFailure(error.message))
	}
}

export function* onSignUpStart() {
	yield takeLatest(actions.signUpStart().type, signUp)
}

export function* signInAfterSignUp({ payload: { user, otherData } }) {
	yield call(getSnapshotFromUser, user, otherData)
}

export function* onSignUpSuccess() {
	yield takeLatest(actions.signUpSuccess().type, signInAfterSignUp)
}

// check for current user from auth
// update redux state with logged in user if user exists
export function* checkUserAuth() {
	try {
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
		yield firebaseSignOut(auth)
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
