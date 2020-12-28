// container for all the list of jobs from the api

import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import {connect} from "react-redux";

import {pullOneJob} from '../actions/searchActions';

export class JobListCard extends Component {
    render() {
      
        return (
            <div className="col-lg-12 col-md-12">
            <div className="single_jobs white-bg d-flex justify-content-between">
                <div className="jobs_left d-flex align-items-center">
                    <div className="thumb">
                        <img className='img-fluid' src={this.props.job.company_logo} alt="" />
                    </div>
                    <div className="jobs_conetent">
                        <Link to={'/job/' + this.props.job.id}><h4>{this.props.job.title}</h4></Link>
                        <div className="links_locat d-flex align-items-center">
                            <div className="location">
                                <p> <i className="fa fa-map-marker"></i> {this.props.job.location}</p>
                            </div>
                            <div className="location">
                                <p> <i className="fa fa-clock-o"></i> {this.props.job.type}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jobs_right">
                    <div className="apply_now">
                        <a className="heart_mark" href="#"> <i className="fa fa-heart"></i> </a>
                        <Link to={'/job/' + this.props.job.id} className="boxed-btn3">Apply Now</Link>
                    </div>
                    <div className="date">
                        <p>Date line: {this.props.job.created_at}</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

const mapDispatchToProps = {
    pullOneJob
}

export default connect(null, mapDispatchToProps) (JobListCard);
