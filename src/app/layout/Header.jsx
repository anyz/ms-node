import React from "react";
import SubHeader from "./SubHeader";

import {
    Row, Col, Image, Navbar, Nav, Button
    } from 'react-bootstrap';

const Header = (props) => {

    return(
        <div className="main-header">
            <div className="bg-dark navbar">
            <Row>
                <Col className="ms-header-col">
                    <Image src="/images/header.png" height="35px" width="215px" alt="Bismillah" />
                </Col>
            </Row>            
            </div>


            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/donate">Donations</Nav.Link>
                </Nav>
                </Navbar.Collapse>

                <Button className="btn btn-danger glow-button"
                    href="/donate">Donate Now!</Button>                
            </Navbar>

            <SubHeader />
        </div>
    );
};


export default Header;