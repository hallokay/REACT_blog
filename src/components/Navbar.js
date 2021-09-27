import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
    return (
      <div className="navbar">
        <h1 className="blog_logo">kay'blog</h1>
        <div className="link">
          <Link to="/">home</Link>
          <Link to="/create">Create New</Link>
        </div>
      </div>
    );
}

export default Navbar
