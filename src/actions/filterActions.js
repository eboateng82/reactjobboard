import { TITLE_FILTER, LOCATION_FILTER, FULLTIME_FILTER} from './actionTypes';

export const searchTitle = description => {
    return {
        type: TITLE_FILTER,
        payload: description
    }
}

export const searchLocation = location => {
    return {
        type: LOCATION_FILTER, 
        payload: location
    }
}

export const searchFulltime = fulltime => {
    return {
        type: FULLTIME_FILTER, 
        payload: fulltime
    }
}

