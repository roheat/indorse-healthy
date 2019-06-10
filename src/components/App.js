import React from 'react';
import AutoComplete from './AutoComplete';
import '../styles/app.css';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Healthy living, healthy eating</h1>
				<AutoComplete />
			</div>
		);
	}
};

export default App;