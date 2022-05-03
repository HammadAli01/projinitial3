import React from 'react';
import './Mainnavbar.css';
import { Navbar,Nav,Container } from 'react-bootstrap';
import { BsList } from "react-icons/bs";
import userImg from './../profile.jpg';
export default function Mainnavbar() {
    return (
        <div>
            <Navbar >
            <Container >
                <BsList className='sidebarIcon' viewBox='0 0 20 13'></BsList>
                <Navbar.Brand href="#home">rAIcruiter</Navbar.Brand>
                <Nav >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Instructions</Nav.Link>
                <Nav.Link href="#pricing">Contact us</Nav.Link>
                <img src={userImg} className='userImg'></img>
                </Nav>
               
            </Container>
            </Navbar>
        </div>
    )
}
