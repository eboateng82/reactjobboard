// houses the navbar and header

import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
        <div>
            <header>
            <div className="header-area ">
                <div id="sticky-header" className="main-header-area">
                    <div className="container-fluid ">
                        <div className="header_bottom_border">
                            <div className="row align-items-center">
                                <div className="col-xl-3 col-lg-2">
                                    <div className="logo">
                                        <a href="index.html">
                                            <img src="img/logo.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>    
        <div className="bradcam_area bradcam_bg_1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="bradcam_text">
                            <h3>Find Your Developer Dream Job Here</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default Header