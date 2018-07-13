import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFoods } from '../actions/foodsActions';

import Foods from './foods/Foods';

import { Wrapper } from './AppCSS';

class App extends Component {
	componentDidMount() {
		this.props.getFoods();
	}
	render() {
		return (
			<Wrapper>
				<h1>List of Foods</h1>
				{this.props.foods.map((food) => <div key={food.id}>{food.name}</div>)}

				<Foods />
			</Wrapper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		foods: state.foods.foodsArray,
	};
};

export default connect(mapStateToProps, { getFoods })(App);
