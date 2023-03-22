import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  bg-primary   fw-bold`}>
      <div className="container-fluid ">
        <Link className="navbar-brand fs-1" to="/">{props.title}</Link>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
                    </ul>
        </div> */}
      </div>
    </nav>
  )
 
  }


