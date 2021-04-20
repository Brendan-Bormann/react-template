import React, { Component } from 'react'
import './examplePage.scss';

class ExamplePage extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {

	}

	render() {

		return (
			<div className="ExamplePage">
				<h1>Example Page</h1>
				<p>Page: { window.location.pathname } </p>
			</div>
		);
	}
}

export default ExamplePage;