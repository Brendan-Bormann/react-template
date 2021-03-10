/* eslint-disable */
/* ^ dont copy this ^ */

import React, { Component } from 'react'
import './example.scss';

class Example extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: null,
		};
	}

	render() {
		return (
			<div className="Example">

			</div>
		);
	}
}

function AnotherExample(props) {
	return (
		<div className="Example">

		</div>
	);
}

export default Example;
