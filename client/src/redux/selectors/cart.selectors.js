import { createSelector } from '@reduxjs/toolkit'

const selectCart = state => state.cart

export const selectCartHidden = createSelector(
	[selectCart],

	cart => cart.hidden
)

export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
)

export const selectCartCount = createSelector([selectCartItems], cartItems =>
	cartItems.reduce((acc, item) => acc + item.quantity, 0)
)

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
	cartItems.reduce(
		(acc, item) => acc + item.quantity * parseInt(item.price.slice(1)),
		0
	)
)
