import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../redux/selectors/cart.selectors'

import CIndex from '../components.index.js'
import styles from './CartDropdown.module.scss'

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems)

	const { CustomButton } = CIndex

	return (
		<div className={styles.Container}>
			<div>
				{cartItems.length > 0 ? (
					cartItems.map(item => <div>{item.id}</div>)
				) : (
					<span>Your cart is empty</span>
				)}
			</div>
			<CustomButton>Checkout</CustomButton>
		</div>
	)
}

export default CartDropdown
