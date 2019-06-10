import React from 'react';

class AutoComplete extends React.Component {
	state = {
		items: [
			{
				"name": "Burger",
				"ingredients": ["Bread", "Patty", "Cheese Slice"],
				"calories": "200"
			},
			{
				"name": "Pizza",
				"ingredients": ["Bread", "Cheese", "Veggies"],
				"calories": "400"
			},
			{
				"name": "Pasta",
				"ingredients": ["Raw Pasta", "Sauce", "Veggies"],
				"calories": "300"
			},
			{
				"name": "Fries",
				"ingredients": ["Potato", "Cooking Oil"],
				"calories": "100"
			},
			{
				"name": "Coke",
				"ingredients": ["Water", "Coke recipe"],
				"calories": "50"
			}
		],
		suggestions: [],
		text: '',
		itemNames: []
	}

	componentDidMount() {
		let itemNames = [];
		this.state.items.map(item => itemNames.push(item.name));
		this.setState({ itemNames });
	}

	onTextChange = (event) => {
		let suggestions = [];
		const value = event.target.value;
		if (value.length > 0) {
			const regex = new RegExp(`${value}`, 'i');
			suggestions = this.state.itemNames.sort().filter(v => regex.test(v));
		}

		this.setState({ suggestions, text: value });
	}

	onSuggestionSelect(value) {
		this.setState({ text: value, suggestions: [] });
	}

	renderSuggestions () {
		const { suggestions } = this.state;
		if (suggestions.length !== 0) {
			return (
				<ul>
					{suggestions.map((item, i) => (
							<li key={i} onClick={() => this.onSuggestionSelect(item) }>{item}</li>
						))
					}
				</ul>
			);	
		}
		return null;
	}

	getDetails(value, arr) {
		for (let i=0; i < arr.length; i++) {
			if (arr[i].name === value ) {
				return this.props.items[i];
			}
		}
		return null;
	}

	render() {
		return (
			<div className="autocomplete_text">
				<input value={this.state.text} onChange={this.onTextChange} type="text" placeholder="Enter a food item"/>
				{this.renderSuggestions()}
			</div>
		);
	}
}

export default AutoComplete;