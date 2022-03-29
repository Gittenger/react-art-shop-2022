import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectShopCollection } from '../redux/selectors/shop.selectors'

import CIndex from '../components/components.index'
import styles from './_styles/Pages.module.scss'

const CollectionDetails = props => {
	// get collection from state, fetch from firebase eventually
	// rename collectionName urlParam to title, use with higher order selector
	const { collectionName: title } = useParams()
	const collection = useSelector(selectShopCollection(title))

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
