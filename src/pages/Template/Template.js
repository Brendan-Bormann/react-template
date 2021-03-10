import React, { Children, Component } from 'react'
import './Template.scss';

class Template extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		document.title = this.props.title !== undefined ? "Website | " + this.props.title : "Brendan Bormann";
	}

	render() {

		return (
			<div className="Template">
				{ React.cloneElement(this.props.children, this.props) }
			</div>
		);
	}
}

export default Template;