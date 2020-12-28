import {PLURAL_JOBS_FETCH, 
    SINGLE_JOB_FETCH,
    START_PLURAL_JOBS_FETCH,
    PLURAL_JOBS_FETCH_FAILURE} 
from './actionTypes';

import axios from 'axios';

export const fetchPluralJobs = () =>({
type: START_PLURAL_JOBS_FETCH
})

export const pluralJobsSuccess = data => {
return {
  type: PLURAL_JOBS_FETCH, 
  payload: {data}
}
}
/* 
export const pullAllJobs = (page, location, fulltime, description) => dispatch => {
axios
    .get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&full_time=${fulltime}e&location=${location}&page=${page}`)
    .then(response =>
        dispatch({
            type:PLURAL_JOBS_FETCH,
            payload: response.data
        }))
        .catch(err => console.log(err))
} */

export const pluralJobsFailure = error => {
return {
type: PLURAL_JOBS_FETCH_FAILURE,
payload: {error}
}
}

export const pullOneJob = id => dispatch => {
axios
    .get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`)
    .then(response =>
        dispatch({
            type: SINGLE_JOB_FETCH,
            payload: response.data
        }))
    .catch(err => console.log(err))
}