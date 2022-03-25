import React from 'react'
import styles from './CollectionItem.module.scss'

const CollectionItem = ({ item }) => {
	const { name, imgSrc, price } = item

	return (
		<div className={styles.CollectionItem}>
			<div style={{ backgroundImage: `url(${imgSrc})` }}></div>
			<div>
				<span>{name}</span>
				<span>{price}</span>
			</div>
			<button>Add to cart</button>
		</div>
	)
}

export default CollectionItem
