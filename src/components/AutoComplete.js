import React from 'react';

class AutoComplete extends React.Component {
	state = {
		suggestions: [],
		text: '',
		itemNames: []
	}

	componentDidMount() {
		let itemNames = [];
		this.props.items.map(item => itemNames.push(item.name));
		this.setState({ itemNames });
	}

	onTextChange = (event) => {
		let suggestions = [];
		const value = event.target.value;
		if (value.length > 0) {
			const regex = new RegExp(`${value}`, 'i');
			suggestions = this.state.itemNames.sort().filter(v => regex.test(v));
		}
		this.props.getSelectedItem(null);
		this.setState({ suggestions, text: value });
	}

	onSuggestionSelect(value) {
		const selectedItem = this.getDetails(value, this.props.items);
		this.props.getSelectedItem(selectedItem);

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