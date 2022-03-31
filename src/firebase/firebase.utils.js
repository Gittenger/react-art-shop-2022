import { initializeApp } from 'firebase/app'
import {
	getFirestore,
	doc,
	setDoc,
	getDoc,
	Timestamp,
} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import CollectionsData from '../redux/shop.data.js'

const config = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: 'art-shop-1968d.firebaseapp.com',
	projectId: 'art-shop-1968d',
	storageBucket: 'art-shop-1968d.appspot.com',
	messagingSenderId: '310437290976',
	appId: '1:310437290976:web:c0aa58de545932c7a94185',
}

export const firebase = initializeApp(config)
export const firestore = getFirestore(firebase)
const auth = getAuth(firebase)

// create document for user on sign up or sign in
export const createUserProfileDocument = async (user, otherData) => {
	const userRef = doc(firestore, 'users', user.uid)
	const snapshot = await getDoc(userRef)

	// if no doc, create one
	// then return ref to doc
	if (!snapshot.exists()) {
		const { email, displayName } = user
		const createdAt = Timestamp.fromDate(new Date())

		try {
			await setDoc(userRef, { email, displayName, createdAt, ...otherData })
		} catch (error) {
			console.error(error)
		}
	}

	return userRef
}

// for adding batch of documents, add shop collections
// create one doc for each key in Obj
const makeDocs = async () => {
	for (const key of Object.keys(CollectionsData)) {
		const data = CollectionsData[key]
		const collectionRef = doc(firestore, 'collections', data.title)
		setDoc(collectionRef, data)
	}
}

// transform collections into app-specific data object
export const transformSnapshotData = collections =>
	collections.docs
		.map(doc => {
			const { title, items } = doc.data()
			return {
				title,
				items,
			}
		})
		.reduce((acc, collection) => {
			acc[collection.title] = collection
			return acc
		}, {})

export const getCurrentUser = () =>
	new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe()

			// resolves with either user, or null
			resolve(userAuth)
		}, reject)
	})

export default firebase
