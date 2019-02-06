import React from 'react';

class Services extends React.Component {
  render() {
  	return (
        <section className="section pt-5" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">What We Do</h1>
                        <div className="section-title-border margin-t-20"></div>
                        <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">We primarily spend our time building bespoke Shopify apps, but that's not all we do. We also do design work, and provide eCommerce strategy consulting to our clients.</p>
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-display2 text-custom"></i>
                            <h4 className="padding-t-15">App Development</h4>
                            <p className="padding-t-15 text-muted">Our primary service is Shopify app development. However, we also build SaaS apps using React and Node.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-science text-custom"></i>
                            <h4 className="padding-t-15">Theme Crafting</h4>
                            <p className="padding-t-15 text-muted">Another service that we provide clients is Shopify theme customization. We provide our clients with beautiful Shopify themes.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-piggy text-custom"></i>
                            <h4 className="padding-t-15">eCommerce Strategy</h4>
                            <p className="padding-t-15 text-muted">We provide our clients with consulting services on their eCommerce strategy. We have helped our customers grow successful.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default Services;