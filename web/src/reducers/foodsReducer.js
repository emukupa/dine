import { FETCHING_FOODS, FOODS_FETCHED, FETCHING_FOODS_ERROR } from '../actions/foodsActions';

const initState = {
	foods: [],
	isFoodsFetched: false,
	isFetchingFoods: false,
	loadingFoodsMessage: null,
	foods_error: null,
};

export default (foods = initState, action) => {
	switch (action.type) {
		case FETCHING_FOODS:
			return {
				...foods,
				foods_error: null,
				isFoodsFetched: false,
				isFetchingFoods: true,
				loadingFoodsMessage: action.message,
			};
		case FOODS_FETCHED:
			return {
				...foods,
				foods_error: null,
				foods: action.foods,
				isFoodsFetched: true,
				isFetchingFoods: false,
				loadingFoodsMessage: null,
			};
		case FETCHING_FOODS_ERROR:
			return {
				...foods,
				foods_error: action.errorMessage,
				isFoodsFetched: false,
				isFetchingFoods: false,
				loadingFoodsMsg: null,
				foods: [],
			};

		default:
			return foods;
	}
};
