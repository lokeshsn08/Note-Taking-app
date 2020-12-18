import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary scrolling-navbar">
    <div className="container">
        <a className="navbar-brand pt-0 waves-effect" href="">
            <h3>Add Your Notes Here</h3>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav nav-flex-icons">
                <li className="nav-item">
                    <a href="https://github.com/mdbootstrap/material-design-for-bootstrap" className="nav-link border border-light rounded waves-effect"
                        target="_blank">
                        <i className="fa fa-github mr-2"></i> GitHub
                    </a>
                </li>
            </ul>

        </div>

    </div>
</nav>
        </div>
    )
}

export default Navbar
