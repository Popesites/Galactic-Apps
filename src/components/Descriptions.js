import React from 'react';
import { Link } from 'react-router-dom';

class Descriptions extends React.Component {
  render() {
  	return (
          <section className="section section-lg bg-web-desc">
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="text-white">Build your custom Shopify app today</h2>
                        <p className="padding-t-15 home-desc">Are you looking to have a custom Shopify app built for your store? If so, get in touch with us today & we can discuss the details of your app.</p>
                            <div className="site-scroll">
                                <a href="#contact" className="btn btn-bg-white margin-t-30 waves-effect waves-light mb-5">Contact Us</a>
                            </div>
                    </div>
                </div>
            </div>
            <div className="bg-pattern-effect">
                <img src="images/bg-pattern.png" alt="" />
            </div>
        </section>
  	);
  }
}
export default Descriptions;