import React, { Component } from 'react';
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
import componentData from '../../config/componentData';

export default class Docs extends Component {
	constructor(props) {
		super(props);
		const route = window.location.hash.substr(1)
		this.state = {
			route
		};
	}
	componentDidMount() {
		window.addEventListener('hashchange', () => {
			const route = window.location.hash.substr(1)
			this.setState({ route });
		});
	}
	render() {
		const { route } = this.state;
		const component = route
			? componentData.filter(component => component.name === route)[0]
			: componentData[0];
		return (
			<div>
				<Navigation
					components={componentData.map(component => component.name)}
				/>
				<ComponentPage component={component} />
			</div>
		);
	}
}
