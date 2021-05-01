import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">

                    <a class="navbar-brand text-white pt-4" href="#">AJBrohi</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}></FontAwesomeIcon>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link text-white" href="#">Home<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">About Me</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        
    );
};

export default Navbar;