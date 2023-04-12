import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div>
            <nav className='header-container'>
                <div className='header-left'>
                    <h2>JobConnect</h2>
                </div>
                <div className='header-middle'>
                    <div className='links'>
                        {/* <ActiveLink to="/">Home</ActiveLink> */}
                        <ActiveLink to="/statistics">Statistics</ActiveLink>
                        <ActiveLink to="/appliedjobs">Applied Jobs</ActiveLink>
                        <ActiveLink to="/blog">Blog</ActiveLink>
                    </div>
                </div>
                <div className='header-right'>
                    <Link><button className='btn'>Start Applying</button></Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;
