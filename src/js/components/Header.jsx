import React from "react";
import { Navbar, Nav, NavDropdown }from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header(){
  return (
    <>
    <div id="header">
  <Navbar>
  <Link to='/' className="companyName" >Furturo Magazine</Link>

    <Nav className="mr-auto">
    </Nav>
  </Navbar>
  </div>
  </>
  );
}
export default Header;
