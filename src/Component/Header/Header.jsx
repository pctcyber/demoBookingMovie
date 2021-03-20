import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div >
            <nav className=" navbar navbar-expand-sm navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="#">Cyber</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="home">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="register">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="lifecycle">LifeCicle</NavLink>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <NavLink className="dropdown-item" to="/usestatedemo">UseState Hook</NavLink>
                            </div>
                        </li> */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                             </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="/usestatedemo">UseState</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/chonXe">Chon Xe</NavLink></li>
                               
                            </ul>
                               
                        </li>


                    </ul>
                    <form className="form-inline my-2 my-lg-0 d-flex" style={{ marginLeft: '800px' }}>
                        <input className="form-control " type="text" placeholder="Search" />
                        <button className="btn btn-outline-success m-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            </div>
        )

    }
}



