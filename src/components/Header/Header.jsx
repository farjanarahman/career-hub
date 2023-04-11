import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div>
            <nav>
                <h2>JobConnect</h2>
                <div className='links'>
                    <ActiveLink to="/">Home</ActiveLink>
                    <ActiveLink to="/statistics">Statistics</ActiveLink>
                    <ActiveLink to="/appliedjobs">Applied Jobs</ActiveLink>
                    <ActiveLink to="/blog">Blog</ActiveLink>
                </div>
                <Link><button className='btn'>Start Applying</button></Link>
            </nav>
            <div className='banner'>
                <div className='banner-left'>
                    <h1>One Step Closer To Your <span>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn'>Get Started</button>
                </div>
                <div className='banner-right'>
                    <img src="/src/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Header;