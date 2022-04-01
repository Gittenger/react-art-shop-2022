const findExistingCartItem = (cartItems, itemToCompare) =>
	cartItems.find(cartItem => cartItem.name === itemToCompare.name)

export const addItemToCart = (cartItems, cartItemToAdd) =>
	findExistingCartItem(cartItems, cartItemToAdd)
		? cartItems.map(cartItem =>
				cartItem.name === cartItemToAdd.name
					? { ...cartItem, quantity: cartItem.quantity + 1 }
					: cartItem
		  )
		: [...cartItems, { ...cartItemToAdd, quantity: 1 }]

export const removeItemFromCart = (cartItems, cartItemToRemove) =>
	findExistingCartItem(cartItems, cartItemToRemove)?.quantity === 1
		? cartItems.filter(cartItem => cartItem.name !== cartItemToRemove.name)
		: cartItems.map(cartItem =>
				cartItem.name === cartItemToRemove.name
					? { ...cartItem, quantity: cartItem.quantity - 1 }
					: cartItem
		  )
