import React from 'react'
import PropTypes from 'prop-types'
// import { Link} from "react-router-dom";

// Reusable NavBar
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 ">
            <li className="nav-item">
                <a className="nav-a active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
                <a className="nav-a" href="/about">{props.AboutText}</a>
            </li> */}
            
            </ul>
            {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-primary" type="submit">Search</button>
            </form> */}

            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleTGMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" for="flexSwitchCheckDefault">Green Dark Mode</label>
            </div>

            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleTRMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" for="flexSwitchCheckDefault">Red Dark Mode</label>
            </div>
            <br />
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" for="flexSwitchCheckDefault">Blue Dark Mode</label>
            </div>
        </div>
        </div>
    </nav>

)
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    AboutText : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : 'Set Title here',
    AboutText : 'Set text here'
}