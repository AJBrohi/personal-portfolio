import React from 'react';
import Typed from 'react-typed';
import "./Header.css";
import Particles from 'react-particles-js';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info d-flex flex-column justify-content-center align-items-center text-center">
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 30,
                                density: {
                                    enable: true,
                                    value_area: 900
                                }
                            },
                            shape: {
                                type: 'circle',
                                stroke: {
                                    width: 6,
                                    color: '#f9ab00'
                                }
                            }
                        }
                    }} />
                <h1>Header</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Web Development", "AJBrohi"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop>
                </Typed>

                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    );
};

export default Header;