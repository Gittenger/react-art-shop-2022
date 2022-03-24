const findExistingCartItem = (cartItems, itemToCompare) =>
	cartItems.find(cartItem => cartItem.id === itemToCompare.id)

export const addItemToCart = (cartItems, cartItemToAdd) =>
	findExistingCartItem(cartItems, cartItemToAdd)
		? cartItems.map(cartItem =>
				cartItem.id === cartItemToAdd.id
					? { ...cartItem, quantity: cartItem.quantity + 1 }
					: cartItem
		  )
		: [...cartItems, { ...cartItemToAdd, quantity: 1 }]

export const removeItemFromCart = (cartItems, cartItemToRemove) =>
	findExistingCartItem(cartItems, cartItemToRemove)?.quantity === 1
		? cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
		: cartItems.map(cartItem =>
				cartItem.id === cartItemToRemove.id
					? { ...cartItem, quantity: cartItem.quantity - 1 }
					: cartItem
		  )
