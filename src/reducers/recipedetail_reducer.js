import { FETCH_RECIPE } from '../actions/index';
import { CLEAR_RECIPE } from '../actions/index';

export default function(state= [], action) {
    switch(action.type){
        case FETCH_RECIPE:
            return action.payload.data; 
        case CLEAR_RECIPE:
            return action.payload; 
        default:
            return state;   
    }
}