import React from 'react'
import { Link } from 'react-router-dom'
import CIndex from '../components.index'

const CollectionPreview = ({ title, items }) => {
	const { CollectionItem } = CIndex

	return (
		<div>
			<h1>{title.toUpperCase()}</h1>
			<Link to={`/shop/${title}`}>See more</Link>
			<div>
				{items.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	)
}

export default CollectionPreview
