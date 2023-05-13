import React from 'react'
import Navbar from './Navbar'

const Contact = () => {
    return (
        <div>

            <div>
                <>
                    <header id="site-header" className="fixed-top">
                        <Navbar></Navbar>
                    </header>
                    <div className="inner-banner py-5">
                        <section className="w3l-breadcrumb text-left py-sm-5 ">
                            <div className="container">
                                <div className="w3breadcrumb-gids">
                                    <div className="w3breadcrumb-left text-left">
                                        <h2 className="inner-w3-title">Contact Us </h2>
                                        <p className="inner-page-para mt-2">
                                            Growing your crops, growing your profits
                                        </p>
                                    </div>
                                    <div className="w3breadcrumb-right">
                                        <ul className="breadcrumbs-custom-path">
                                            <li>
                                                <a href="index.html">Home</a>
                                            </li>
                                            <li className="active">
                                                <span className="fas fa-angle-double-right mx-2" /> Contact Us
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/*//inner-page*/}
                    {/* contact-form */}
                    <section className="w3l-contact-main" id="contact">
                        <div className="contact-infhny py-5">
                            <div className="container py-md-5">
                                <div className="title-content text-center mb-md-5 mb-4">
                                    <h6 className="title-subw3hny">Send us a message</h6>
                                    <h3 className="title-w3l mx-lg-5">Keep In Touch With Us.</h3>
                                </div>
                                <div className="top-map">
                                    <div className="map-content-9">
                                        <form action="#" method="post">
                                            <div className="form-top1">
                                                <div className="form-top">
                                                    <div className="form-top-right">
                                                        <textarea
                                                            name="Message"
                                                            id="Message"
                                                            placeholder="Message*"
                                                            required=""
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                    <div className="form-top-left">
                                                        <input
                                                            type="text"
                                                            name="Name"
                                                            id="Name"
                                                            placeholder="Name"
                                                            required=""
                                                        />
                                                        <input
                                                            type="number"
                                                            name="Phone"
                                                            placeholder="Your phone number"
                                                            required=""
                                                        />
                                                        <input
                                                            type="email"
                                                            name="Sender"
                                                            id="Sender"
                                                            placeholder="Email*"
                                                            required=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="text-center mt-5">
                                                    <button type="submit" className="btn btn-style btn-primary">
                                                        Submit Now <i className="far fa-paper-plane ml-lg-3" />
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* //contact-form */}
                    {/* contact map */}
                    <section className="w3l-contact-main" id="contact">
                        <div className="container">
                            <div className="map pt-lg-3">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5358699645058!2d76.84871217523646!3d23.07747147913534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ce9ceaaaaaaab%3A0xa224b6b82b421f83!2sVellore%20Institute%20of%20Technology%20-%20VIT%20Bhopal!5e0!3m2!1sen!2sin!4v1683823649528!5m2!1sen!2sin"
                                    width={600}
                                    height={450}
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </section>
                    {/* //contact map */}
                    {/*/contact*/}
                    <section className="w3l-contact-main w3l-contact-info py-5" id="contact">
                        <div className="midd-w3 py-md-5">
                            <div className="container">
                                <div className="row contact-infos pt-lg-4">
                                    <div className="col-lg-4 col-md-6 pe-lg-5">
                                        <div className="single-contact-infos">
                                            <div className="icon-box">
                                                {" "}
                                                <span className="fas fa-map-marked-alt" />
                                            </div>
                                            <div className="text-box">
                                                <h3 className="mb-2">Location</h3>
                                                <p>AgroGrow VIT Bhopal University Bhopal 456611.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                                        <div className="single-contact-infos">
                                            <div className="icon-box">
                                                {" "}
                                                <span className="fas fa-envelope-open-text" />
                                            </div>
                                            <div className="text-box">
                                                <h3 className="mb-2">Phone Numbers</h3>
                                                <p>
                                                    <a href="tel:+12 403-11-22-69">+91 1122334444</a>
                                                </p>
                                                <a href="tel:+12 403-11-22-69"></a>
                                                <p>
                                                    <a href="tel:+12 403-11-22-69" />
                                                    <a href="tel:+12 304-11-22-79">+91 1122334444</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                                        <div className="single-contact-infos">
                                            <div className="icon-box">
                                                {" "}
                                                <span className="fas fa-blender-phone" />
                                            </div>
                                            <div className="text-box">
                                                <h3 className="mb-2">Emails</h3>
                                                <p>
                                                    {" "}
                                                    <a href="mailto:company@gmail.com">company@gmail.com</a>
                                                </p>
                                                <p>
                                                    {" "}
                                                    <a href="mailto:support@gmail.com">support@gmail.com</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*//contact*/}
                    {/*/footer*/}
                    <footer className="w3l-footer-29-main">
                        <div className="footer-29-w3l py-5">
                            <div className="container pt-md-5">
                                <div className="w3l-footer-text-style">
                                    <div className="footer-list-cont d-sm-flex align-items-center justify-content-between mb-5">
                                        <h2 className="w3logo">
                                            <a className="navbar-brand" href="index.html">
                                                Agrow<span className="sub-color">Grow</span>
                                            </a>
                                        </h2>
                                        <div className="main-social-footer-29">
                                            <ul>
                                                <li>
                                                    <a href="https://facebook.com" className="facebook">
                                                        <i className="fab fa-facebook-f" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com" className="twitter">
                                                        <i className="fab fa-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://instagram.com/_mayank_ahuja"
                                                        className="instagram"
                                                    >
                                                        <i className="fab fa-instagram" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#linkedin" className="linkedin">
                                                        <i className="fab fa-linkedin-in" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row footer-top-29 pt-lg-5 pt-sm-4">
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="address-grid">
                                            <h5>
                                                VIT Bhopal University
                                                <br /> Bhopal.
                                            </h5>
                                            <p className="mt-4">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor{" "}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 mt-sm-0 mt-4 ps-lg-5">
                                        <div className="address-grid">
                                            <h5>Phone</h5>
                                            <h5 className="phone-number-text mt-2">
                                                <a href="tel:+91 8305682466">+91 8305682466</a>
                                            </h5>
                                        </div>
                                        <div className="address-grid mt-sm-5 mt-4">
                                            <h5>E-mail</h5>
                                            <h5 className="email-cont-text mt-1">
                                                {" "}
                                                <a href="mailto:mayankahuja451@gmail.com" className="mail">
                                                    mayankahuja451@gmail.com
                                                </a>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6 col-sm-5 footer-list-menu ps-lg-5 mt-lg-0 mt-sm-5 mt-4">
                                        <div className="address-grid">
                                            <h5 className="mb-4 pb-lg-2">Support</h5>
                                            <ul>
                                                <li>
                                                    <a href="#privacy">Privacy Policy</a>
                                                </li>
                                                <li>
                                                    <a href="#terms"> Terms of Service</a>
                                                </li>
                                                <li>
                                                    <a href="contact.html">Contact us</a>
                                                </li>
                                                <li>
                                                    <a href="#faq">faQ</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="address-grid col-lg-4 col-md-6 col-sm-7 ps-lg-5 mt-lg-0 mt-sm-5 mt-4 w3l-footer-16-main">
                                        <h5>Subscribe here</h5>
                                        <form
                                            action="#"
                                            className="subscribe d-flex mt-4 pt-lg-2 mb-4"
                                            method="post"
                                        >
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                required=""
                                            />
                                            <button>
                                                <span className="fa fa-paper-plane" aria-hidden="true" />
                                            </button>
                                        </form>
                                        <p>
                                            Subscribe to our mailing list and get updates to your email inbox.
                                        </p>
                                    </div>
                                </div>
                                {/* copyright */}
                                <div className="w3l-copyright text-center mt-lg-5 mt-sm-4 pt-md-4 pt-3">
                                    <p className="copy-footer-29">© AgrowGrow. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </>

            </div >


        </div>
    )
}

export default Contact
