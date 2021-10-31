import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../Images/logo/logo.png'
import emptyProfile from '../../Images/logo/empty-profile.jpg'
import useAuth from '../../hooks/useAuth';


const Header = () => {
  const {user, logout} = useAuth()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link to='/home' className="navbar-brand"><img src={logo} className='w-25' alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/home' className="nav-link nav-links" aria-current="page" ><span>Home</span></Link>
        </li>

        {user.email? <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Services
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to='/addServices' class="dropdown-item" >Add Services</Link ></li>
            <li><Link to='/manageServices' class="dropdown-item" >Manage Services</Link ></li>
            <li><Link to='/' class="dropdown-item" >Something else here</Link ></li>
          </ul>
        </li> : ''}

        <li className="nav-item">
          <Link to='/about' className="nav-link nav-links" ><span>About Us</span></Link>
        </li>
        <li className="nav-item">
          <Link to='/contacts' className="nav-link nav-links" ><span>Contacts</span></Link>
        </li>
      </ul>
      <div>
          <ul className='access-btn'>
            {user.email ? <li> <span> <img className='header-img' src={user?.photoURL ? user?.photoURL : emptyProfile} alt="" /> 
            &nbsp; <strong style={{ color: '#e85556' }}>{user?.displayName ? user?.displayName : user?.email}</strong> &nbsp;</span> 
            
            {user.email && <button onClick={logout} className="btn btn-design">Logout</button>}</li>
            : <li><Link to='/login'><button className="btn btn-design" type="submit">Login</button></Link></li> }
          </ul>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;