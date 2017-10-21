import {FETCH_GROUPS} from '../actions/index';
const INITIAL_STATE = { all:[],group:null };

export default function(state = INITIAL_STATE,action){
	switch (action.type){
		case FETCH_GROUPS:
			if (!action.payload){return {...state, all: [] }}
			if (action.payload.status == 200){
				return { ...state, all: action.payload.data};
			}
			else{return {...state, all: [] }}	
		default:
			return state;
	}
}