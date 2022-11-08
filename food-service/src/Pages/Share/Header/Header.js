import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
            <Link className='btn btn-ghost normal-case text-xl' to="/">Food Service</Link>
           <Link className='btn btn-ghost normal-case text-xl' to="/home">Home</Link>
            <Link className='btn btn-ghost normal-case text-xl' to="/review">MY reviews</Link>
            <Link className='btn btn-ghost normal-case text-xl' to="/service">Add service </Link>
           <Link className='btn btn-ghost normal-case text-xl' to="/login">Login </Link>
            <Link className='btn btn-ghost normal-case text-xl' to="/signup">Sign Up </Link>
           <Link className='btn btn-ghost normal-case text-xl' to="/blog">Blog </Link>
</div>
        </div>
    );
};

export default Header;