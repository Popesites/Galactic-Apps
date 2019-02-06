import React from 'react';
import { Link } from 'react-router-dom';

class SocialMedia extends React.Component {
  render() {
  	return (
        <section className="cta bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="list-inline social margin-t-20">
                            <li className="list-inline-item"> <a href="https://github.com/galactic-apps" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="mdi mdi-github-circle"></i></a></li>
                            <li className="list-inline-item"> <a href="https://twitter.com/AppsGalactic" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="mdi mdi-twitter"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 margin-t-30 text-right">
                        <p className="float-right contact-title"><i className="pe-7s-mail-open"></i>&nbsp; hello@galacticapps.com</p>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default SocialMedia;