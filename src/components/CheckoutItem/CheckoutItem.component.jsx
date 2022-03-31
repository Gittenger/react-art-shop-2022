import React from 'react'
import { useDispatch } from 'react-redux'
import {
	addItem,
	clearItemFromCart,
	removeItem,
} from '../../redux/slices/cart.slice'

import styles from './CheckoutItem.module.scss'

const CheckoutItem = ({ item }) => {
	const dispatch = useDispatch()
	const { name, quantity, price, imgSrc } = item

	return (
		<div className={styles.Container}>
			<div>
				<img src={imgSrc} alt="item" />
			</div>
			<span>{name}</span>
			<span>
				<button onClick={() => dispatch(removeItem(item))}>&#10094;</button>
				<span>{quantity}</span>
				<button onClick={() => dispatch(addItem(item))}>&#10095;</button>
			</span>
			<span>{price}</span>
			<button onClick={() => dispatch(clearItemFromCart(item))}>&#10005;</button>
		</div>
	)
}

export default CheckoutItem
