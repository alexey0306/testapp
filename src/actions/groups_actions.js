// Import section
import axios from 'axios';
import {FETCH_GROUPS,ROOT_URL,REQUEST_TIMEOUT} from './index';
import {show_error} from './errors_actions';
axios.defaults.timeout = REQUEST_TIMEOUT;

// Functions
export function fetchGroups(){
	const URL = `${ROOT_URL}groups/list`;
	const request = axios.get(URL);
	return {
		type: FETCH_GROUPS,
		payload: request
	}
}


export function fetchGroups_Thunk(){
	const URL = `${ROOT_URL}groups/list`;
	return function(dispatch){
		axios.get(URL)
		.then((response) => {
			dispatch(fetchGroupsSuccess(response))
		})
		.catch((err) => {
			if (err.response){
				dispatch(show_error(err.response.data.message));
			}
			else{
				dispatch(show_error(err.toString()));
			}
		});
	}
}

function fetchGroupsSuccess(response){
	return {
		type: FETCH_GROUPS,
		payload:response
	}
}
