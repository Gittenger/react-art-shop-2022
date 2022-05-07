const path = require('path')
const express = require('express')
const cors = require('cors')

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_KEY)

const app = express()
const port = process.env.PORT || 5000

app.use(
	express.json({
		limit: '50kb',
	})
)
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'client', 'build')))

const corsOptions =
	process.env.NODE_ENV === 'production'
		? {
				origin: [process.env.CORS_ORIGIN, process.env.CORS_ORIGIN_WWW],
				credentials: true,
		  }
		: {
				origin: [process.env.CORS_ORIGIN],
				credentials: false,
		  }
app.use(cors())
app.options('*', cors())

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.listen(port, error => {
	if (error) throw error
	console.log(`Server running on port ${port}`)
})

app.post('/payment', (req, res) => {
	const body = {
		source: req.body.token.id,
		amount: req.body.amount,
		currency: 'usd',
	}

	stripe.charges.create(body, (error, stripeRes) => {
		if (error) {
			res.status(500).send({
				error,
			})
		} else {
			res.status(200).send({
				success: stripeRes,
			})
		}
	})
})
