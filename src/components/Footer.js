import React from 'react';
import { a } from 'react-router-dom';

class Footer extends React.Component {
  render() {
  	return (
         <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 margin-t-20">
                        <h4>GALACTIC APPS</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><a href="/">Home</a></li>
                                <li><a href="https://shopify.com" target="_blank" rel="noopener noreferrer">Our Apps</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <h4>Information</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><a href="/terms-of-service">Terms & Conditions</a></li>
                                <li><a href="/privacy-policy">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <h4>Support</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><a href="JavaScript:Void(0);">FAQ</a></li>
                                <li><a href="JavaScript:Void(0);">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <h4>Subscribe</h4>
                        <div className="text-muted margin-t-20">
                            <p>Subscribe to our newsletter to keep up-to-date on our new app releases.</p>
                        </div>
                        <form method="post" action="home-one" className="form subscribe" id="subscribe">
                            <input id="subscriber" name="subscriber" placeholder="Email" className="form-control" required />
                            <button type="submit" style={{background:"none", border:"none", cursor: "pointer"}} className="submit"><i className="pe-7s-paper-plane"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
  	);
  }
}
export default Footer;