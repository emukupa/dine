import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFoods } from '../actions/foodsActions';

import Foods from './foods/Foods';

import { Wrapper } from './AppCSS';

class App extends Component {
	componentDidMount() {
		console.log('component mount ');
	}
	render() {
		return (
			<Wrapper>
				<h1>Food title</h1>
				<Foods />
			</Wrapper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		foods: state.foods,
	};
};

export default connect(mapStateToProps, { getFoods })(App);
