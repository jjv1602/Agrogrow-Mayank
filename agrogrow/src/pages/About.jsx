import React from 'react'
import Navbar from './Navbar';
const About = () => {
  return (
    
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
                            <h2 className="inner-w3-title">About Us </h2>
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
                                    <span className="fas fa-angle-double-right mx-2" /> About Us
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        {/*//inner-page*/}
        {/*/ab*/}
        <section className="w3l-banner-agency py-5" id="work">
            <div className="midd-w3 py-md-4">
                <div className="container">
                    <div className="about-img-top mb-lg-5 mb-4">
                        <img
                            src="assets/images/banner2.jpg"
                            alt=""
                            className="img-fluid radius-image"
                        />
                    </div>
                    <div className="row">
                        <div className="col-lg-6 banner-content align-self">
                            <h6 className="title-subw3hny">About Us</h6>
                            <h3 className="title-w3l">
                                Agriculture &amp; Organic
                                <br /> Product Form
                            </h3>
                            <div className="w3banner-content-btns">
                                <a
                                    href="about.html"
                                    className="btn btn-style btn-primary mt-lg-5 mt-4 me-2"
                                >
                                    Read More <i className="fas fa-arrow-right ms-2" />
                                </a>
                                <a
                                    href="contact.html"
                                    className="btn btn-style btn-outline-dark mt-lg-5 mt-4"
                                >
                                    Contact Us <i className="fas fa-arrow-right ms-2" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 text-left ps-lg-5 mt-lg-0 mt-md-5 mt-4">
                            <p>
                                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                                ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                                amet elit. Non quae, fugiat nihil ad.Lorem ipsum viverra feugiat.
                                Pellen tesque libero ut justo, ultrices in ligula. Semper at
                                tempufddfel. Lorem ipsum dolor sit amet elit. Non quae Lorem ipsum
                                dolor sit amet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="w3l-blog-se-3 py-5" id="ab-grids">
            <div className="container">
                <div className="inner-sec-w3ls py-lg-5 py-md-4 py-2">
                    <div className="row blog-sec">
                        <div className="col-lg-4 manager-img mb-lg-0 mb-md-5 mb-4 pe-lg-5">
                            <h6 className="title-subw3hny">Why Choose Us</h6>
                            <h3 className="title-w3l">Growing Healthy Food</h3>
                            <p className="card-text mt-3">
                                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo in
                                ligula.
                            </p>
                            <a
                                href="tel:+44-123-456-78"
                                className="btn btn-style btn-primary mt-lg-5 mt-4"
                            >
                                <span className="fas fa-phone-alt" aria-hidden="true" />{" "}
                                +00-123-456-78
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 about-in blog-grid-info text-left">
                            <div className="card img">
                                <div className="card-body img">
                                    <a href="#" className="d-block zoom radius-image">
                                        <img
                                            src="assets/images/a2.jpg"
                                            alt=""
                                            className="img-fluid radius-image"
                                        />
                                    </a>
                                    <div className="blog-des mt-4">
                                        <h5 className="card-title mt-4">Our Mission</h5>
                                        <p className="card-text">
                                            Nulla eu elementum quam. magna purus, nec. semper at vel,
                                            ipsum dolor et init.Lorem ipsum viverra feugiat. Pellen
                                            tesque libero ut justo, ultrices in ligula.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 about-in blog-grid-info text-left mt-md-0 mt-5">
                            <div className="card img">
                                <div className="card-body img">
                                    <a href="#" className="d-block zoom radius-image">
                                        <img
                                            src="assets/images/a3.jpg"
                                            alt=""
                                            className="img-fluid radius-image"
                                        />
                                    </a>
                                    <div className="blog-des mt-3">
                                        <h5 className="card-title mt-4">Our Vision</h5>
                                        <p className="card-text">
                                            Nulla eu elementum quam. magna purus, nec. semper at vel,
                                            ipsum dolor et init.Lorem ipsum viverra feugiat. Pellen
                                            tesque libero ut justo, ultrices in ligula.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* team */}
        <section className="w3l-team py-5" id="w3l-team">
            <div className="container py-md-5">
                <div className="row text-left">
                    <div className="col-md-6 mt-md-5 pe-lg-5">
                        <div className="title-content text-left">
                            <h6 className="title-subw3hny">Our Team</h6>
                            <h3 className="title-w3l mb-3">Expert Backend</h3>
                            <p>
                                Aliquam blandit vel sapien eget aliquam. Phasellus eget volutpat
                                libero. Suspendisse eleifend nibh quis dui placerat fermentum.n
                                molestie nulla felis, vitae feugiat justo pulvinar et.
                            </p>
                            <a className="btn btn-style btn-primary mt-md-5 mt-4" href="#">
                                {" "}
                                Join Our Team <span className="fas fa-arrow-right ms-2" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 mt-5">
                        <div className="team-grids text-center">
                            <img src="assets/images/team5.jpg" className="img-fluid" alt="" />
                            <div className="team-info">
                                <div className="caption">
                                    <div className="social-icons-section text-center">
                                        <a className="fac" href="#url">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a className="linkedin" href="#url">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>Mayank Ahuja</h4>
                        <h6>Web Developer </h6>
                    </div>
                    <div className="col-md-3 col-6 mt-5">
                        <div className="team-grids text-center">
                            <img src="assets/images/team6.jpg" className="img-fluid" alt="" />
                            <div className="team-info">
                                <div className="caption">
                                    <div className="social-icons-section text-center">
                                        <a className="fac" href="#url">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a className="linkedin" href="#url">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>Isha Singhal</h4>
                        <h6>Machine Learning </h6>
                    </div>
                    <div className="col-md-3 col-6 mt-5">
                        <div className="team-grids text-center">
                            <img src="assets/images/team1.jpg" className="img-fluid" alt="" />
                            <div className="team-info">
                                <div className="caption">
                                    <div className="social-icons-section text-center">
                                        <a className="fac" href="#url">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a className="twitter" href="#url">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>Simran Mustafa</h4>
                        <h6>Web Developer</h6>
                    </div>
                    <div className="col-md-3 col-6 mt-5">
                        <div className="team-grids text-center">
                            <img src="assets/images/team2.jpg" className="img-fluid" alt="" />
                            <div className="team-info">
                                <div className="caption">
                                    <div className="social-icons-section text-center">
                                        <a className="fac" href="#url">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a className="twitter" href="#url">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>Sanhitha</h4>
                        <h6>Description</h6>
                    </div>
                    <div className="col-md-3 col-6 mt-5">
                        <div className="team-grids text-center">
                            <img src="assets/images/team3.jpg" className="img-fluid" alt="" />
                            <div className="team-info">
                                <div className="caption">
                                    <div className="social-icons-section text-center">
                                        <a className="fac" href="#url">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a className="twitter" href="#url">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>Swastik Midda</h4>
                        <h6>Description</h6>
                    </div>
                    <div className="col-md-3 col-6 mt-5">
                        <div className="team-grids text-center">
                            <img src="assets/images/team4.jpg" className="img-fluid" alt="" />
                            <div className="team-info">
                                <div className="caption">
                                    <div className="social-icons-section text-center">
                                        <a className="fac" href="#url">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a className="twitter" href="#url">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>Priyam Aneja </h4>
                        <h6>Description</h6>
                    </div>
                </div>
            </div>
        </section>
        {/* team */}
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

  )
}

export default About
