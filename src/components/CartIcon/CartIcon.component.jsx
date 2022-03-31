import React from 'react'
import { ReactComponent as ShoppingCart } from '../../assets/shopping-cart.svg'
import { useDispatch } from 'react-redux'
import { toggleCartHidden } from '../../redux/slices/cart.slice.js'

import styles from './CartIcon.module.scss'

const CartIcon = () => {
	const dispatch = useDispatch()

	return (
		<button
			className={styles.Button}
			onClick={() => dispatch(toggleCartHidden())}
		>
			<ShoppingCart />
		</button>
	)
}

export default CartIcon
