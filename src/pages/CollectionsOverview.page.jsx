import React from 'react'
import { useSelector } from 'react-redux'
import { selectCollectionsForPreview } from '../redux/selectors/shop.selectors'
import CIndex from '../components/components.index'

const CollectionsOverview = () => {
	const { CollectionPreview } = CIndex
	const collections = useSelector(selectCollectionsForPreview)

	return (
		<div>
			<h1>Collections Overview</h1>
			{collections.map(({ ...collectionProps }, i) => (
				<CollectionPreview key={i} {...collectionProps} />
			))}
		</div>
	)
}

export default CollectionsOverview
