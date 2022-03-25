import React from 'react'
import { useParams } from 'react-router-dom'

import CIndex from '../components/components.index'
import styles from './_styles/Pages.module.scss'

const CollectionDetails = props => {
	const collection = {
		title: 'Collection Title',
		items: [
			{
				id: 1,
				name: 'Starry Night',
				imgSrc: 'https://m.media-amazon.com/images/I/71ciV1vrRPL._AC_SX679_.jpg',
				price: '$170',
			},
			{
				id: 2,
				name: 'Dotted Rainbow',
				imgSrc: 'https://m.media-amazon.com/images/I/81nRjwiG0ZL._AC_SX679_.jpg',
				price: '$99',
			},
		],
	}

	// get title and items to map from collection
	// get collection from state, fetch from firebase eventually
	// use useSelector hook to select from collection state later
	const { collectionName: title } = useParams()

	const { CollectionItem } = CIndex
	const { items } = collection

	return (
		<div className={styles.CollectionDetails}>
			<h1>{title}</h1>
			<div>
				{items.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	)
}

export default CollectionDetails
