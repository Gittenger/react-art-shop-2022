import React, { useEffect } from 'react'
import { BallTriangle as Spinner } from 'react-loader-spinner'
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
	const { CollectionPreview } = CIndex
	const collections = useSelector(selectCollectionsForPreview)
	const shopIsLoading = useSelector(selectShopIsLoading)

	useEffect(() => {
		dispatch(fetchCollectionsStart())
	}, [dispatch])

	return (
		<div className={styles.ShopOverview}>
			{shopIsLoading ? (
				<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
					<Spinner />
				</div>
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
