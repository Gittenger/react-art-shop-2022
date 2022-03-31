import React from 'react'
import { ReactComponent as ShoppingCart } from '../../assets/shopping-cart.svg'

import styles from './CartIcon.module.scss'

const CartIcon = () => {
	return (
		<button className={styles.Button}>
			<ShoppingCart />
		</button>
	)
}

export default CartIcon
