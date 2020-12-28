// house the Job componenet in here

import React, { Component } from 'react'
import {connect} from 'react-redux'
import { pullAllJobs } from '../asyncActions/searchAsyncActions';
import JobListCard from './JobListCard'

export class JobContainer extends Component {
    componentDidMount(){
        this.props.pullAllJobs(0, this.props.location, this.props.fulltime, this.props.keyword);
    }
    render() {
        const {jobs} = this.props
        return (
          <div className="col-lg-12">
                        <div className="job_lists m-0">
                            <div className="row">
                              {jobs.data && jobs.data.map((job, index) => 
                                <JobListCard key={index} job={job} />
                              )}
                                
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="pagination_wrap">
                                        <ul>
                                            <li><a href="#"> <i className="ti-angle-left"></i> </a></li>
                                            <li><a href="#"><span>01</span></a></li>
                                            <li><a href="#"><span>02</span></a></li>
                                            <li><a href="#"> <i className="ti-angle-right"></i> </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        );
      }
    }
const mapStateToProps = (state) => ({
    jobs: state.jobs.jobs,
    location: state.filter.location,
    keyword: state.filter.keyword,
    fulltime: state.filter.fulltime
})
 

const mapDispatchToProps = {
    pullAllJobs
}
export default connect(mapStateToProps, mapDispatchToProps) (JobContainer);
