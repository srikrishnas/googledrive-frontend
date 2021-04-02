import React from 'react'
import { Link } from "react-router-dom"

import GDrivelogo from '../../media/Google_Drive_icon.png'
import Lander from '../../media/landing.jpg'

import '../../styles/Header.css'

const Landing = () => {
    return (
        <div>
            <nav className="navbar navbar-light">
                <a className="navbar-brand" href="#">
                    <img src={GDrivelogo} width="40" height="40" className="d-inline-block align-top" alt="" />
                    <span className="drive">Google Drive</span>
                </a>
                <form className="form-inline">
                    <Link to="/login">
                        <button type="button" className="btn btn-outline-dark">login</button>
                        {/* <p>login</p> */}
                    </Link>
                    <Link to="/register">
                        <button type="button" className="btn btn-outline-dark ml-3">Register</button>
                        {/* <p className="ml-4">Register</p> */}
                    </Link>
                </form>
            </nav>
            <div className="conatiner mt-5">
                <div className="row">
                    <h1 className="col-5 w-50 p-4 mt-5 ml-4 text-head font">Access and sync your content from any device</h1>
                    <img src={Lander} className="img-fluid w-50 p-3" alt="Responsive image" />
                </div>
            </div>
        </div>
    )
}

export default Landing
