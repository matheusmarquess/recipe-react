import { FETCH_RECIPES } from '../actions/index';

export default function(state= [], action) {
    switch(action.type){
        case FETCH_RECIPES:
            return action.payload.data; 
        default:
            return state;   
    }
}