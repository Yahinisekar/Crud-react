import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import Navbar from 'react-bootstrap';

const Navbar = () => {
  //to navigate between pages
  const navigate = useNavigate();
  return (
    //navigation bar
    <>
      
      <div className="container-fluid sticky-top p-0">
        <nav className="navbar ">
          <div className="container-fluid">
            <a className="navbar-brand nav-profile" href="#">
              User Profile
            </a>
            <div className="d-flex align-items-center gap-5 link">
              <Link to="/" className="home">
                Home
              </Link>
              <Link to="/users" className="users">Users</Link>
              <button
                type="button"
                className="btn btn-success"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                onClick={() => { navigate('/addUser') }}
              >
                Add User
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
