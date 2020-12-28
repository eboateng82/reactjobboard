import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
        <footer className="footer">
            <div className="copy-right_text wow fadeInUp">
                <div className="container">
                    <div className="footer_border"></div>
                    <div className="row">
                        <div className="col-xl-12">
                            <p className="copy_right text-center">
                            Copyright All rights reserved | This template is made with <i 
                            className="fa fa-heart-o" 
                            aria-hidden="true"></i> by <a href="https://colorlib.com" 
                            target="_blank"
                            rel='noopener noreferrer'
                            >Colorlib</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        )
    }
}

export default Footer;