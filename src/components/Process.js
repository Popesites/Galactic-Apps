import React from 'react';
import { Link } from 'react-router-dom';

class Process extends React.Component {
  render() {
  	return (
        <section className="section pt-5" id='process'>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1 className="section-title text-center">Custom Development Process</h1>
                    <div className="section-title-border margin-t-20"></div>
                    <p className="section-subtitle text-muted text-center font-secondary padding-t-30">We follow a standard procedure for all custom development & design projects we take on with our clients. The basic process is outlined below.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 text-center process-left-icon-1">
                    <i className="pe-7s-angle-right"></i>
                </div>
                <div className="col-lg-6 text-center process-left-icon-2">
                    <i className="pe-7s-angle-right"></i>
                </div>
            </div>
            <div className="row margin-t-50">
                <div className="col-lg-4 plan-line">
                    <div className="text-center process-box">
                        <i className="pe-7s-pen text-custom"></i>
                        <h4 className="padding-t-15">Tell us what you need</h4>
                        <p className="text-muted">Provide us with the details of your request.</p>
                    </div>
                </div>
                <div className="col-lg-4 plan-line">
                    <div className="text-center process-box">
                        <i className="pe-7s-id text-custom"></i>
                        <h4 className="padding-t-15">Get FREE quotes</h4>
                        <p className="text-muted">We will give you a FREE quote for your request.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-center process-box">
                        <i className="pe-7s-target text-custom"></i>
                        <h4 className="padding-t-15">Deliver high quality product</h4>
                        <p className="text-muted">We have a 100% customer satisfaction guarantee.</p>
                    </div>
                </div>
                <div className="text-center mx-auto site-scroll">
                    <a href="#contact" className="btn btn-custom waves-light waves-effect margin-t-50">Get Started <i className="mdi mdi-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>
  	);
  }
}
export default Process;