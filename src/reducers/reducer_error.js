import {SHOW_ERROR,CLEAR_ERRORS} from '../actions/index';
const INITIAL_STATE = {all: [] }

export default function(state = INITIAL_STATE,action){
	switch (action.type){
		case SHOW_ERROR:
			return {...state, all:[{id:1, type:"danger",message: action.payload}]}
		case CLEAR_ERRORS:
			return {...state, all:[]};
		default:
			return state;
	}
}