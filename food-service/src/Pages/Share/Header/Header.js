import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
            <a href="#" className="btn btn-ghost normal-case text-xl"><Link to="/">Food Service</Link></a>
            <a href="#" className="btn btn-ghost normal-case text-xl"><Link to="/home">Home</Link></a>
            <a href="#" className="btn btn-ghost normal-case text-xl"><Link to="/review">MY reviews</Link></a>
            <a href="#" className="btn btn-ghost normal-case text-xl"><Link to="/service">Add service </Link></a>
            <a href="#" className="btn btn-ghost normal-case text-xl"><Link to="/login">Login </Link></a>
            <a href="#" className="btn btn-ghost normal-case text-xl"><Link to="/signup">Sign Up </Link></a>
            <a href="#" className="btn btn-ghost normal-case text-xl"><Link to="/blog">Blog </Link></a>
</div>
        </div>
    );
};

export default Header;