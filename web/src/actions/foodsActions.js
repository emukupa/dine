import axios from 'axios';

const ROOT_URL = `http://localhost:8000/api`;
const FOODS_URL = `${ROOT_URL}/foods`;

export const FETCHING_FOODS = 'FETCHING_FOODS';
export const FOODS_FETCHED = 'FOODS_FETCHED';
export const FETCHING_FOODS_ERROR = 'FETCHING_FOODS_ERROR';

/*
export const getFoods = (token) => (dispatch) => {
	const url = FOODS_URL;
	const requestOptions = { headers: { Authorization: token } };
	dispatch({
		type: FETCHING_FOODS,
		message: 'Fetching foods...',
	});

	axios
		.get(url, requestOptions)
		.then((response) => {
			dispatch({
				type: FOODS_FETCHED,
				foods: response.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: FETCHING_FOODS_ERROR,
				errorMessage: `Could not retrieve foods! ${err}.`,
			});
		});
};
*/

export const getFoods = () => (dispatch) => {
	const url = FOODS_URL;
	//let url = 'https://jsonplaceholder.typicode.com/posts/';
	//url = 'https://swipeanddine.herokuapp.com/api/';
	dispatch({
		type: FETCHING_FOODS,
		message: 'Fetching foods...',
	});

	axios
		.get(url)
		.then((response) => {
			dispatch({
				type: FOODS_FETCHED,
				foods: response.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: FETCHING_FOODS_ERROR,
				errorMessage: `Could not retrieve foods! ${err}.`,
			});
		});
};
