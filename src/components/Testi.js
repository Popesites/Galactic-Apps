import React from 'react';

class Testi extends React.Component {
  render() {
  	return (
         <section className="section bg-light" id="testi">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">What they've said</h1>
                        <div className="section-title-border margin-t-20"></div>
                        <p className="section-subtitle text-muted text-center font-secondary padding-t-30">We've made a lot of businesses happy with our results. See what some of them are saying.</p>
                    </div>
                </div>
                <div className="row margin-t-50">
                    <div className="col-lg-4">
                        <div className="testimonial-box hover-effect margin-t-30">
                            <img src="images/testimonials/user-2.jpg" alt="" className="img-fluid d-block img-thumbnail rounded-circle" />
                            <div className="testimonial-decs">
                                <p className="text-muted text-center mb-0">“I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why I need to throw curve balls.” </p>
                            </div>
                            <h5 className="text-center text-uppercase padding-t-15">Carrie Weimer - <span className="text-muted text-capitalize">Fungiftwrap</span></h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-box hover-effect margin-t-30">
                            <img src="images/testimonials/user-1.jpg" alt="" className="img-fluid d-block img-thumbnail rounded-circle" />
                            <div className="testimonial-decs">
                                <p className="text-muted text-center mb-0">“The Galactic Apps team provided web design and development services for my client. The team was knowledgeable, attentive and solutions-oriented.” </p>
                            </div>
                            <h5 className="text-center text-uppercase padding-t-15">Michael P. Howlett - <span className="text-muted text-capitalize">Purenew</span></h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-box hover-effect margin-t-30">
                            <img src="images/testimonials/user-3.jpg" alt="" className="img-fluid d-block img-thumbnail rounded-circle" />
                            <div className="testimonial-decs">
                                <p className="text-muted text-center mb-0">“The Hotbar app has been excellent in generating email addresses for our email list. We have seen a 25% increase on email subscriptions since installing the app!” </p>
                            </div>
                            <h5 className="text-center text-uppercase padding-t-15">Theresa D. Sinclair - <span className="text-muted text-capitalize">Lynchburg</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default Testi;