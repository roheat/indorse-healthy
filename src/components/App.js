import React from 'react';
import AutoComplete from './AutoComplete';
import DisplayDetails from './DisplayDetails';
import '../styles/app.css';
import items from '../items';

class App extends React.Component {
	state = {
		selectedItem: null
	}

	selectedItem = item => {
		this.setState({ selectedItem: item });
	}

	render() {
		return (
			<div className="container">
				<h1>Healthy living, healthy eating</h1>
				<AutoComplete items={JSON.parse(items)} getSelectedItem={(item) => this.selectedItem(item)}/>
				<DisplayDetails items={JSON.parse(items)} item={this.state.selectedItem} />
			</div>
		);
	}
};

export default App;