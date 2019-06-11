import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = {
			hasError: false
		}
	}

	componentDidCatch() {
		this.setState({hasError: true});
	}

	render() {
		if(this.state.hasError) {
			return <h1>Opps! This is not the error you are looking for...</h1>
		}
		return this.props.children;
	}
}

export default ErrorBoundary