import {
    fetchPluralJobs, 
    pluralJobsSuccess, 
    pluralJobsFailure
} from '../actions/searchActions';


// get user list
export const pullAllJobs = (page = 0, location = "", fulltime="false", description="") => async dispatch => {
    dispatch(fetchPluralJobs());
    try {
      const res = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&full_time=${fulltime}e&location=${location}&page=${page}`);
      const data = await res.json();
      dispatch(pluralJobsSuccess(data));
    } catch (err) {
      console.log(err.message);
      dispatch(pluralJobsFailure(err.message));
    }
  }