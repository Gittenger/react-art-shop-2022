import React from 'react'
const CollectionsOverview = () => {
	const collections = [
		{
			title: 'paintings',
			items: [
				{
					id: 1,
					name: 'Starry Night',
					imgSrc: 'https://m.media-amazon.com/images/I/71ciV1vrRPL._AC_SX679_.jpg',
					price: '$170',
				},
				{
					id: 2,
					name: 'Dotted Rainbow',
					imgSrc: 'https://m.media-amazon.com/images/I/81nRjwiG0ZL._AC_SX679_.jpg',
					price: '$99',
				},
			],
		},
		{
			title: 'accessories',
			items: [
				{
					id: 1,
					name: 'Jeweled Anklet',
					imgSrc: 'https://m.media-amazon.com/images/I/61-aCW0IoiL._AC_UY695_.jpg',
					price: '$25',
				},
				{
					id: 2,
					name: 'Handmade Rings',
					imgSrc:
						'https://fashiongum.com/wp-content/uploads/2015/10/Boho-Bohemian-Accessories-1.jpg',
					price: '$50',
				},
			],
		},
	]

const CollectionsOverview = () => (
	<div>
		<h1>Collections Overview</h1>
	</div>
)

export default CollectionsOverview
