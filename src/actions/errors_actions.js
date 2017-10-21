import {SHOW_ERROR,CLEAR_ERRORS} from './index';

export function show_error(message){
	return {
		type: SHOW_ERROR,
		payload: message
	}
}

export function clearErrors(){
	return {
		type: CLEAR_ERRORS,
		payload: null
	}
}