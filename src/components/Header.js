import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Film,  Upload } from 'react-feather';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div> <Navbar className="bg-primary" style={{backgroundColor:""}}>
    <Container>
      <Navbar.Brand href="#home">

        <Link to={''} style={{textDecoration:"none"}}>

        <Upload/>
        

        <span className='ms-3' >Video Upload</span>
        </Link>
       

      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header