import React, { useEffect } from 'react'
import { BallTriangle as Spinner } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCollectionsStart } from '../redux/slices/shop.slice.js'
import {
	selectShopCollection,
	selectShopIsLoading,
} from '../redux/selectors/shop.selectors'

import CIndex from '../components/components.index'
import styles from './_styles/Pages.module.scss'

const CollectionDetails = props => {
	const dispatch = useDispatch()

	// rename collectionName urlParam to title, use with higher order selector
	const { collectionName: title } = useParams()
	const collection = useSelector(selectShopCollection(title))
	const shopIsLoading = useSelector(selectShopIsLoading)

	useEffect(() => {
		dispatch(fetchCollectionsStart())
	}, [dispatch])

	const { CollectionItem } = CIndex
	const { items } = collection

	return (
		<div className={styles.CollectionDetails}>
			<h1>{title}</h1>
			{shopIsLoading ? (
				<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
					<Spinner />
				</div>
			) : (
				<div>
					{items?.map(item => (
						<CollectionItem key={item.id} item={item} />
					))}
				</div>
			)}
		</div>
	)
}

export default CollectionDetails
