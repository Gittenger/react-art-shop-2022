import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/slices/cart.slice.js'

import styles from './CollectionItem.module.scss'

const CollectionItem = ({ item }) => {
	const dispatch = useDispatch()
	const { name, imgSrc, price } = item

	return (
		<div className={styles.CollectionItem}>
			<div style={{ backgroundImage: `url(${imgSrc})` }}></div>
			<div>
				<span>{name}</span>
				<span>{price}</span>
			</div>
			<button onClick={() => dispatch(addItem(item))}>Add to cart</button>
		</div>
	)
}

export default CollectionItem
