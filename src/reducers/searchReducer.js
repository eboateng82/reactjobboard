import {
    PLURAL_JOBS_FETCH, 
    SINGLE_JOB_FETCH,
    START_PLURAL_JOBS_FETCH, 
    PLURAL_JOBS_FETCH_FAILURE
} from '../actions/actionTypes';

const initialState ={
    jobs: [],
    loading: false,
    job: []
};


// eslint-disable-next-line 
export default function (state = initialState, action) {
    switch (action.type) {
        case START_PLURAL_JOBS_FETCH:
            return{
                  ...state, 
                  loading: true
            }
        case PLURAL_JOBS_FETCH:
            return {
                ...state,
                jobs: action.payload,
            }
        case PLURAL_JOBS_FETCH_FAILURE:
            const {error} = action.payload;
             return {
                  ...state, 
                  error
            }
        case SINGLE_JOB_FETCH:
            return {
                ...state,
                job: action.payload,
            }
        default:
            return state;
    }
}