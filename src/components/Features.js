import React from 'react';

class Features extends React.Component {
  render() {
  	return (
        <section className="section bg-light" id="features">
        <div className="container">
            <div className="row vertical-content">
                <div className="col-lg-5">
                    <div className="features-box">
                        <h3>Introducing Hotbar — A Less Intrusive Email Collection Popup</h3>
                        <p className="text-muted web-desc">In a world where users are cautious about submitting personal data, it can be hard to come across as a trustable source. That's why we created Hotbar. Hotbar, is the perfect lead-generation tool for unobstrusive email collecting.</p>
                        <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                            <li className="">Create seamless promotions easily.</li>
                            <li className="">Offer users discounts in exchange for their email address.</li>
                            <li className="">Present promotions when users are most likely to sign up.</li>
                            <li className="">Watch as your email collection list grows!</li>
                        </ul>
                        <a href="https://shopify.com" target="_blank" rel="noopener noreferrer" className="btn btn-custom margin-t-30 waves-effect waves-light">Download Now <i className="mdi mdi-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="features-img features-right text-right">
                        <img src="images/online-world.svg" alt="macbook" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  	);
  }
}
export default Features;