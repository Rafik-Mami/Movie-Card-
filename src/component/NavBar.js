import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function NavBar() {
    return (
        <Navbar bg="blue" variant="dark">
        <Navbar.Brand href="#home">Movie Applictaion</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to='/'>Home</Link>
          <Link to='/MovieApp' style={{marginLeft:'10px'}}>MovieList</Link>
         
        </Nav>
        
      </Navbar>
    )
}

export default NavBar
