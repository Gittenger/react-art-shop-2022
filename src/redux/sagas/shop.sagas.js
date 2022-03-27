import { all, call, put, takeLatest } from 'redux-saga/effects'
import { shopSlice } from '../slices/shop.slice'

const { actions } = shopSlice

export function* fetchCollectionsAsync() {
	try {
		let collectionRef, snapshot, collectionsMap

		let convertCollectionsSnapshotToMap = function () {} // import this
		// collectionRef = get collection from firestore
		// snapshot is 1st yield, get shapshot from collectionRef

		collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)

		yield put(actions.fetchCollectionsSuccess(collectionsMap))
	} catch (error) {
		yield put(actions.fetchCollectionsFailure(error.message))
	}
}

export function* fetchCollectionsStart() {
	yield takeLatest(actions.fetchCollectionsStart, fetchCollectionsAsync)
}

export default function* shopSaga() {
	yield all([call(fetchCollectionsStart)])
}
