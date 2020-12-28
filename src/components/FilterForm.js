 // houses the search form to filter out the jobs
 import React, { Component } from 'react'
 import { connect } from 'react-redux';
 
 import {searchTitle, searchLocation, searchFulltime} from '../actions/filterActions';
 
 import { pullAllJobs } from '../asyncActions/searchAsyncActions';
 
 
 export class FilterForm extends Component {
 
   state = {
     location: "",
     description: "",
     fulltime: false
   };
   
   FilterSearch = e => {
     this.props.searchTitle(e.target.value);
   };
  
   FilterLocation = e => {
     this.props.searchLocation(e.target.value);
   };
 
   FilterJobType = e => {
     this.props.searchFulltime(e.target.value);
   };
 
   PullJobs = e => {
     this.props.pullAllJobs(0, this.props.location, this.props.fulltime, this.props.description)
   }
 
 
 
     render() {
       const { location, description, fulltime,} = this.props
         return (
           <div className="row cat_search">
           <div className="col-lg-3 col-md-4">
               <div className="single_input">
                   <input
                    type="text" 
                    placeholder="Search keyword" 
                    name="description"
                    defaultValue={description}
                    onChange={this.FilterSearch}
                    />
               </div>
           </div>
           <div className="col-lg-3 col-md-4">
               <div className="single_input">
                   <input 
                   type="text" 
                   placeholder="Location" 
                   name="location" 
                   defaultValue={location}
                   onChange={this.FilterLocation}
                   />
               </div>
           </div>
           <div className="col-lg-3 col-md-4">
               <div className="single_input">
                   <input 
                   type="checkbox" 
                   style={{width: 15}} 
                   name="fulltime" 
                   placeholder="Fulltime" 
                   defaultValue={fulltime}
                   onClick={this.FilterJobType}
                  />
                   <span style={{fontSize: 2 +"em"}} >Fulltime</span>
               </div>
           </div>
               <div className="col-lg-3 col-md-12">
                   <div className="job_btn">
                       <button 
                       className="boxed-btn3" 
                       onClick={this.PullJobs}
                       >Find Job</button>
                   </div>
               </div>
       </div>
 
     )
   }
 }
 
 const mapStateToProps = (state) => ({
   location: state.filter.location,
   description: state.filter.description,
   fulltime: state.filter.fulltime
 })
 
 
 const mapDispatchToProps = {
   searchTitle, searchLocation, searchFulltime, pullAllJobs
 }
 
 
 export default connect(mapStateToProps, mapDispatchToProps) (FilterForm);