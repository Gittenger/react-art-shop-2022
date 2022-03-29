import React from 'react'
import { useSelector } from 'react-redux'
import { selectCollectionsForPreview } from '../redux/selectors/shop.selectors'

import CIndex from '../components/components.index'
import styles from './_styles/Pages.module.scss'

const CollectionsOverview = () => {
	const { CollectionPreview } = CIndex
	const collections = useSelector(selectCollectionsForPreview)

	return (
		<div className={styles.ShopOverview}>
			<h1>Browse our shop...</h1>
			{collections.map(({ ...collectionProps }, i) => (
				<CollectionPreview key={i} {...collectionProps} />
			))}
		</div>
	)
}

export default CollectionsOverview
