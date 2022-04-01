import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCollectionsStart } from '../redux/slices/shop.slice.js'
import {
	selectCollectionsForPreview,
	selectShopIsLoading,
} from '../redux/selectors/shop.selectors'

import CIndex from '../components/components.index'
import styles from './_styles/Pages.module.scss'

const CollectionsOverview = () => {
	const dispatch = useDispatch()
	const collections = useSelector(selectCollectionsForPreview)
	const shopIsLoading = useSelector(selectShopIsLoading)

	useEffect(() => {
		dispatch(fetchCollectionsStart())
	}, [dispatch])

	const { CollectionPreview, Spinner } = CIndex

	return (
		<div className={styles.ShopOverview}>
			{shopIsLoading ? (
				<Spinner />
			) : (
				<>
					<h1>Browse our shop...</h1>
					{collections.map(({ ...collectionProps }, i) => (
						<CollectionPreview key={i} {...collectionProps} />
					))}
				</>
			)}
		</div>
	)
}

export default CollectionsOverview
