import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import CollectionsData from '../redux/shop.data.js'

// import firestore from 'firebase/firestore'
// import 'firebase/auth'

const config = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: 'art-shop-1968d.firebaseapp.com',
	projectId: 'art-shop-1968d',
	storageBucket: 'art-shop-1968d.appspot.com',
	messagingSenderId: '310437290976',
	appId: '1:310437290976:web:c0aa58de545932c7a94185',
}

const firebase = initializeApp(config)
export const firestore = getFirestore(firebase)

const makeDocs = async () => {
	for (const key of Object.keys(CollectionsData)) {
		const data = CollectionsData[key]
		const collectionRef = doc(firestore, 'collections', data.title)
		setDoc(collectionRef, data)
	}
}

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

export default firebase
