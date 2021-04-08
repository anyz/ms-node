import React from "react";
import Footer from "./Footer";

import {
    Container, Row, Col, Image, Navbar, Nav, Jumbotron
    } from 'react-bootstrap';

const PlainContainer = (props) => {

    const {
        children
    } = props;

    return (
    <div>
        <div className="main-header">
            <div className="bg-dark navbar">
            <Row>
                <Col className="ms-header-col">
                    <Image src="/images/header.png" height="35px" width="215px" alt="Bismillah" />
                </Col>
            </Row>            
            </div>

                <Navbar collapseOnSelect bg="dark" expand="lg" sticky="top">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav fill className="mr-auto">
                        <Nav.Item className="nav-link">
                            <Nav.Link href="/" eventKey="1">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-link">                                    
                            <Nav.Link href="/donate" eventKey="2">Donations</Nav.Link>
                        </Nav.Item>
                    </Nav>

                </Navbar.Collapse> 
                </Navbar> 

        </div>
            <Jumbotron>
                <Row>
                    <Col md={3} className="logo-margin">
                    <Image src="images/ms-logo-4.png" height="65px" width="185px" alt="Masjid Sahabah" />
                    </Col>
                </Row>
            </Jumbotron>
            <Container>
                {children}
            </Container>
        <Footer />
    </div>
    );
};

export default PlainContainer;