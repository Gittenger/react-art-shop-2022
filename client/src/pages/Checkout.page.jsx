import React from 'react'
import { useSelector } from 'react-redux'
import {
	selectCartTotal,
	selectCartItems,
} from '../redux/selectors/cart.selectors'

import CIndex from '../components/components.index.js'
import styles from './_styles/Pages.module.scss'

const Checkout = () => {
	const cartTotal = useSelector(selectCartTotal)
	const cartItems = useSelector(selectCartItems)

	const { CheckoutItem, StripeButton } = CIndex

	return (
		<div className={styles.Checkout}>
			<div>
				<div>
					<span>Product</span>
				</div>
				<div>
					<span>Description</span>
				</div>
				<div>
					<span>Quantity</span>
				</div>
				<div>
					<span>Price</span>
				</div>
				<div>
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((item, i) => (
				<CheckoutItem key={i} item={item} />
			))}
			<div>
				<span>Total: ${cartTotal}</span>
			</div>

			<div>
				*Please use the following test credit card for payments*
				<br />
				4242 4242 4242 4242 - Exp: ANY - CVV: ANY
			</div>
			<StripeButton price={cartTotal} />
		</div>
	)
}

export default Checkout
