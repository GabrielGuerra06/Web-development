import React from "react"
import "./styles.css";
import {Navbar, Nav } from 'react-bootstrap'
import {BsBoxArrowInRight, BsMusicNote} from "react-icons/bs"
import image from "../images/logo.png"

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
      <Navbar className="responsive">
        <Nav>
          <Nav.Link to="/Login" as={Link} className="login"><span>Login</span> <i style={{paddingLeft:"10px"}}><BsBoxArrowInRight color="#144181"/></i></Nav.Link>
        </Nav>

      <Nav> 
        <Nav.Link to="/" as={Link}><img src={image} alt="Logo" style={{width:"300px"}} /></Nav.Link>
      </Nav>

        <Nav>
          <Nav.Link  to="/song" as={Link} className="profile"><span>Songs</span> <i style={{paddingLeft:"10px"}}><BsMusicNote color="#144181"/></i></Nav.Link>
        </Nav>

    </Navbar>
  );
};

export default NavBar;