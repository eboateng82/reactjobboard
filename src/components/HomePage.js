// houses the filter and the joblisting. the home page.

import React, { Component } from 'react';
import FilterForm from './FilterForm'
import JobContainer from './JobContainer';


export class HomePage extends Component {
    render() {
        return (
            <div>
            <div className="catagory_area">
            <div className="container">
              <FilterForm />
            </div>
          </div>
          
          <div className="job_listing_area plus_padding">
            <div className="container">
                <div className="row">
                  <JobContainer />
                </div>
            </div>
          </div>
          </div>
        );
    }
}

export default HomePage
