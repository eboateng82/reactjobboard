import {TITLE_FILTER, LOCATION_FILTER, FULLTIME_FILTER} from '../actions/actionTypes';

let initialState = {
    description: '',
    fulltime: false,
    location: ''
    
}
// eslint-disable-next-line 
export default function (state = initialState, action) {
    switch(action.type) {
        case TITLE_FILTER:
            return{ 
                ...state, 
                description: action.payload
            }
           
        case LOCATION_FILTER:
             return{
                ...state, 
                location: action.payload
            }

        case FULLTIME_FILTER:
            return{
                ...state,
                fulltime: action.payload
            }

           
        default:
            return state;    
    }

}
