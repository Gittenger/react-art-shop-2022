import React from 'react'

import styles from './CartItem.module.scss'

const CartItem = ({ item: { imgSrc, price, name, quantity } }) => (
	<div className={styles.Container}>
		<img src={imgSrc} alt="item" />
		<div>
			<span>{name}</span>
			<span>
				{quantity} x ${price}
			</span>
		</div>
	</div>
)

export default React.memo(CartItem)
