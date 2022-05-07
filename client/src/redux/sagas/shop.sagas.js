import { all, call, put, takeLatest } from 'redux-saga/effects'
import { shopSlice } from '../slices/shop.slice'

import { getDoc, collection, getDocs } from 'firebase/firestore'
import { firestore, transformSnapshotData } from '../../firebase/firebase.utils'

const { actions } = shopSlice

export function* fetchCollectionsAsync() {
	try {
		console.log(process.env.REACT_APP_FIREBASE_API_KEY)
		const collectionRef = collection(firestore, 'collections')
		const snapshot = yield getDocs(collectionRef)

		const collectionsData = yield call(transformSnapshotData, snapshot)

		yield put(actions.fetchCollectionsSuccess(collectionsData))
	} catch (error) {
		yield put(actions.fetchCollectionsFailure(error.message))
	}
}

export function* fetchCollectionsStart() {
	yield takeLatest(actions.fetchCollectionsStart().type, fetchCollectionsAsync)
}

export default function* shopSaga() {
	yield all([call(fetchCollectionsStart)])
}
