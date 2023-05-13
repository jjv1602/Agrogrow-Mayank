import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light stroke">
                <h1>
                    <a className="navbar-brand" href="index.html">
                        Agro<span className="sub-color">Grow</span>
                    </a>
                </h1>
                <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon fa icon-expand fa-bars" />
                    <span className="navbar-toggler-icon fa icon-close fa-times" />
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav mx-lg-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link " activeClassName="nav-link active">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link "  activeClassName="nav-link active">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/services" className="nav-link "  activeClassName="nav-link active">
                                Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link " activeClassName="nav-link active">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <form action="#" method="GET" className="d-flex search-header">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search here..."
                            aria-label="Search"
                            required=""
                        />
                        <button
                            className="btn btn-style btn-secondary me-lg-3"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="mobile-position">
                    <nav className="navigation">
                        <div className="theme-switch-wrapper">
                            <label className="theme-switch" htmlFor="checkbox">
                                <input type="checkbox" id="checkbox" />
                                <div className="mode-container">
                                    <i className="gg-sun" />
                                    <i className="gg-moon" />
                                </div>
                            </label>
                        </div>
                    </nav>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
