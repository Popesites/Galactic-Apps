import React from 'react';
import Aux from './hoc/Aux_';
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";
import FooterLinks from "./components/FooterLinks";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


class Faq extends React.Component {

    render() {

        return (
            <Aux>
                <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
                    <div className="container">
                        <a href="/" className="navbar-brand logo text-uppercase">
                            Galactic Apps
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="mdi mdi-menu"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="nav-button ml-auto">
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <button className="btn btn-custom navbar-btn btn-rounded waves-effect waves-light">Try Hotbar</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <section className="section bg-home home-half" data-image-src="images/img-2.jpg">
                    <div className="bg-overlay"></div>
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-white text-center">
                                        <h1 className="home-title">FAQ - Daily Deals</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-pattern-effect">
                        <img src="images/bg-pattern.png" alt="" />
                    </div>
                </section>
                <section className="section pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How can I install Daily Deals?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>You can install Daily Deals by visiting our <a href="#" target="_blank">Shopify App store page</a> and clicking on "Add App".</p>
                                            <p>Alternatively, you can install the app manually by visiting the following address (substitute {"<YOUR_SHOPIFY_DOMAIN>"} with your store.myshopify.com domain): <br /><a target="_blank" href="https://server.daily-deals.galacticapps.com/auth?shop=<YOUR_SHOPIFY_DOMAIN>">https://server.daily-deals.galacticapps.com/auth?shop={"<YOUR_SHOPIFY_DOMAIN>"}</a></p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How can I uninstall Daily Deals?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>Uninstalling Daily Deals is very easy. Simply navigate to your Shopify admin, go to Apps, and click on the trash can icon next to the Daily Deals app.</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What settings does Daily Deals have?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>Daily Deals has 4 main settings:</p>
                                            <ul>
                                                <li>Featured Collection: Select your store's collection to use for Daily Deals promotions</li>
                                                <li>Collection Size: Select the number of products you would like to populate the collection with</li>
                                                <li>Discount Amount: Enter the discount amount that you would like apply to the collection's products</li>
                                                <li>Discount Type: Select whether you'd like to apply a percentage or a dollar amount off of each product</li>
                                            </ul>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How do I generate new deals?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>To generate new deals, simply fill in your desired settings, and click on the "Generate Deals" button.</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>
            </Aux>
        )
    }
}

export default Faq;