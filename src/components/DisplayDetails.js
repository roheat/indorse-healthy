import React from 'react';

const DisplayDetails = (props) => {

	return (
		<div>
		{
			props.item ?
			<div className="details_wrapper">
				<h2>{props.item.name}</h2>
				<h3>Ingredients:</h3>
				<ul>{props.item.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}</ul>
				<h3>Calories: {props.item.calories}</h3>
			</div>
			:null
		}
		</div>
	);
}

export default DisplayDetails;