import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo/logo.png'
import billSource from '../../Images/footer/pay-source.png'


const Footer = () => {
    return (
        <footer className='bg-color mt-5'>
            <div className='container '>
                
                <div className='row g-3 pt-4'>
                    <div className='col-md-4'>
                        <div>
                            <Link className="navbar-brand" to="/home"> <img className='img-fluid w-25' src={logo} alt="" /></Link>
                        </div>
                        <br />
                        <div className='icon'>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-facebook-square"></i></a>
                        </div>
                        
                    </div>
                    <div className='col-md-3 footer-option'>
                        <p className='text-secondary' ><a href="/home">Home</a></p>
                        <p className='text-secondary' ><a href="/ourExperts">Experts</a></p>
                        <p className='text-secondary' ><a href="/pharmecy">Pharmacy</a></p>
                        <p className='text-secondary' ><a href="/departments">Departments</a></p>
                    </div>
                    <div className='col-md-5'>
                        <h3 className='text-secondary'>Sign up for the newsletter</h3>
                        <input className='footer-input' type="text" placeholder='Email here'/>
                        <h3 className='mt-3'><i className="fas fa-phone-volume"></i> <small className='text-secondary'>+1 2 983 433 73 10</small></h3>
                        
                    </div>
                </div>
                <div>
                    <div>
                        <img src={billSource} className='img-fluid mt-3' alt="" />
                    </div>
                    <div className='text-center pb-3'>
                        <h6>COPYRIGHT © 2021. All Rights Reserved By Eatsy</h6>
                        <small>Pay Online Stay Safe & Keep Your Family Safe</small>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;