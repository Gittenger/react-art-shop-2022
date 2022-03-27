import { createSlice } from '@reduxjs/toolkit'
import { addItemToCart, removeItemFromCart } from './utils/cart.utils.js'

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		hidden: true,
		cartItems: [],
	},
	reducers: {
		toggleCartHidden: state => ({ ...state, hidden: !state.hidden }),
		addItem: (state, action) => ({
			...state,
			cartItems: addItemToCart(state.cartItems, action.payload),
		}),
		removeItem: (state, action) => ({
			...state,
			cartItems: removeItemFromCart(state.cartItems, action.payload),
		}),
		clearItemFromCart: (state, action) => ({
			...state,
			cartItems: state.cartItems.filter(
				cartItem => cartItem.id !== action.payload.id
			),
		}),
		clearCart: state => ({ ...state, cartItems: [] }),

		// saga actions
		// no payload
		checkoutSuccess: state => state,
	},
})

export const {
	toggleCartHidden,
	addItem,
	removeItem,
	clearItemFromCart,
	clearCart,
	checkoutSuccess,
} = cartSlice.actions

export default cartSlice.reducer
