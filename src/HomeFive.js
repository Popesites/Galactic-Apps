import React from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Features from './components/Features';
import Descriptions from './components/Descriptions';
import Process from './components/Process';
import Testi from './components/Testi';
import Started from './components/Started';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import FooterLinks from './components/FooterLinks';
import Aux from './hoc/Aux_';

class HomeFive extends React.Component {

    render() {

        var bkg1 = {
            backgroundImage: 'url(images/wave-shape/wave1.png)',
        };
        var bkg2 = {
            backgroundImage: 'url(images/wave-shape/wave2.png)',
        };
        var bkg3 = {
            backgroundImage: 'url(images/wave-shape/wave3.png)',
        };


        return (
            <Aux>
                <Navbar/>
                {/*<section className="home-padding-t-150 position-relative" id="home" style={bkg1}>*/}
                    {/*<div className="bg-overlay"></div>*/}
                    {/*<div className="display-table">*/}
                        {/*<div className="home-cell-bottom">*/}
                            {/*<div className="container">*/}
                                {/*<div className="row">*/}
                                    {/*<div className="col-lg-8 offset-lg-2 text-white text-center">*/}
                                        {/*<h1 className="home-title">We Develop All-Star Apps for Shopify Merchants</h1>*/}
                                        {/*<p className="padding-t-15 home-desc">We are a Shopify app development company*/}
                                            {/*that builds apps for the typical Shopify vendor. Check out some of our*/}
                                            {/*flagship products below.</p>*/}
                                        {/*<a href="https://shopify.com" target="_blank" rel="noopener noreferrer"*/}
                                           {/*className="btn btn-custom margin-t-20">Try Hotbar</a>*/}
                                        {/*<img src="images/home-dashboard.png" alt="Shopify app"*/}
                                             {/*className="img-fluid center-block margin-t-20"/>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</section>*/}

                <section className="section bg-home home-half" id="home" data-image-src="https://images.pexels.com/photos/957061/milky-way-starry-sky-night-sky-star-957061.jpeg">
                    <div className="bg-overlay"></div>
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-white text-center">
                                        <h1 className="home-title">We Develop All-Star Apps for Shopify Merchants</h1>
                                        <p className="padding-t-15 home-desc">We are a Shopify app development company
                                            that builds apps for the typical Shopify vendor. Check out some of our
                                            flagship products below.</p>
                                        <a href="https://shopify.com" target="_blank" rel="noopener noreferrer"
                                           className="btn btn-custom margin-t-20">Try Hotbar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wave-effect wave-anim">
                        <div className="waves-shape shape-one">
                            <div className="wave wave-one" style={bkg1}></div>
                        </div>
                        <div className="waves-shape shape-two">
                            <div className="wave wave-two" style={bkg2}></div>
                        </div>
                        <div className="waves-shape shape-three">
                            <div className="wave wave-three" style={bkg3}></div>
                        </div>
                    </div>
                </section>

                {/* Services Component*/}
                <Services/>

                {/* Features Component*/}
                <Features/>

                {/* Descriptions Component*/}
                <Descriptions/>

                {/* Process Component*/}
                <Process/>

                {/* Testi Component*/}
                <Testi/>

                {/* Started Component*/}
                <Started/>

                {/* Blog Component*/}
                {/*<Blog />*/}

                {/* Contact Component*/}
                <Contact/>

                {/* SocialMedia Component*/}
                <SocialMedia/>

                {/* Footer Component*/}
                <Footer/>

                {/* FooterLinks Component*/}
                <FooterLinks/>

            </Aux>
        );
    }
}

export default HomeFive;