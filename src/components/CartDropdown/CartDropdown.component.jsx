import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleCartHidden } from '../../redux/slices/cart.slice'
import { selectCartItems } from '../../redux/selectors/cart.selectors'
import { useNavigate } from 'react-router-dom'

import CIndex from '../components.index.js'
import styles from './CartDropdown.module.scss'

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems)
	const dispatch = useDispatch()
	const navigate = useNavigate()

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
			<CustomButton
				onClick={() => {
					navigate('/checkout')
					dispatch(toggleCartHidden())
				}}
			>
				Checkout
			</CustomButton>
		</div>
	)
}

export default CartDropdown
