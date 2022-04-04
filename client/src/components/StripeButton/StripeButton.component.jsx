import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { checkoutSuccess } from '../../redux/slices/cart.slice'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
	const priceInCents = price * 100
	const publicKey = 'pk_test_VhJKFk0tyZXeus91EoKmE3UC00RBBIFiZi'
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const onToken = token => {
		fetch(`${process.env.REACT_APP_STRIPE_SERVER}/payment`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				amount: priceInCents,
				token,
			}),
		})
			.then(res => {
				console.log(res)
				dispatch(checkoutSuccess())
				alert('Payment successful.')
				navigate('/')
			})
			.catch(err => {
				console.error(err)
				alert(
					'Error processing payment. Make sure you used the provided test card credentials.'
				)
			})
	}

	return (
		<StripeCheckout
			name="The Art Shoppe"
			label="Pay Now"
			billingAddress
			shippingAddress
			image="https://octodex.github.com/images/boxertocat_octodex.jpg"
			description={`Your total is $${price}`}
			amount={priceInCents}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publicKey}
		/>
	)
}

export default StripeButton
