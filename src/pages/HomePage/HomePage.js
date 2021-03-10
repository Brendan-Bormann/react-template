import React, { Component } from 'react'
import './HomePage.scss';

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {

	}

	render() {

		return (
			<div className="HomePage">
				<h1>Brendan Bormann</h1>
				<p>Page: { window.location.pathname } </p>
			</div>
		);
	}
}

export default HomePage;