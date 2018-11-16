import { MODE_RECIPE } from '../actions/index';

export default function(state= 'list', action) {
    switch(action.type){
        case MODE_RECIPE:
            return action.payload; 
        default:
            return state;   
    }
}