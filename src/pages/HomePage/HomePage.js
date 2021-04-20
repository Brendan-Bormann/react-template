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
				<h1>This is H1</h1>
				<h2>This is H2</h2>
				<h3>This is H3</h3>
				<h4>This is H4</h4>
				<h5>This is H5</h5>
				<h6>This is H6</h6>

				<br />
				<hr />
				
				<p>Page: { window.location.pathname } </p>

				<p className="flow-text">
					Veniam laborum exercitation aliquip amet proident cillum irure et do. Sunt laborum aliquip ullamco cupidatat tempor voluptate ut culpa sint. Sunt sunt eiusmod anim enim. Anim pariatur dolor excepteur duis dolor ipsum aliquip aute consectetur. Nulla Lorem ex officia laborum laboris ut consectetur non. Culpa excepteur pariatur ullamco fugiat magna deserunt ad sunt nisi dolor consectetur culpa et. Qui nostrud qui do excepteur non et ex adipisicing voluptate et.
					<br />
					Incididunt dolore sunt esse dolor labore fugiat eiusmod aliquip tempor amet Lorem dolor. Do eu sint ea officia quis sint do. Est labore velit laboris reprehenderit elit aliqua aliqua pariatur qui sint Lorem.
					<br />
					Dolore quis sit ex cillum. Exercitation exercitation aute irure eiusmod dolore esse do incididunt qui eiusmod in adipisicing occaecat ex. Adipisicing minim aliquip deserunt dolore. Laboris reprehenderit anim magna est eiusmod deserunt ipsum minim consectetur. Dolore nostrud esse incididunt amet dolor qui. Est consectetur adipisicing adipisicing nulla proident. Nisi esse cillum cupidatat qui ad.
					<br />
					Consectetur tempor eiusmod excepteur cillum irure incididunt occaecat quis ad. Laboris in occaecat et ipsum reprehenderit in. Sunt anim proident sunt veniam nulla nisi aliquip sint. Nostrud elit mollit quis sint qui culpa culpa laboris.
				</p>

				<ul>
					<li>item</li>
					<li>item</li>
					<li>item</li>
					<li>item</li>
					<li>item</li>
				</ul>

			</div>
		);
	}
}

export default HomePage;