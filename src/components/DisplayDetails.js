import React from 'react';

const DisplayDetails = (props) => {

	const displayRank = () => {
		let currentRank = 0;
		const sortedItems = props.items.sort((a,b) => b.calories - a.calories);
		sortedItems.forEach((item, index) => {
			if (item.name === props.item.name) {
				currentRank = index+1;
			}
		});
		return <h2 className="rank">Rank: {currentRank}</h2>
	}

	return (
		<div>
		{
			props.item ?
			<div className="details_wrapper">
				<img alt="item_image" src={`/images/${props.item.name}.jpg`} />
				<h2>{props.item.name}</h2>
				<h3>Ingredients:</h3>
				<ul>{props.item.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}</ul>
				<h3>Calories: {props.item.calories} cal</h3>
				{displayRank()}
			</div>
			:null
		}
		</div>
	);
}

export default DisplayDetails;