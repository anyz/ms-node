import React from "react";
import SubHeader from "./SubHeader";

import {
    Row, Col, Image, Navbar
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

                <Navbar collapseOnSelect bg="dark" expand="lg" sticky="top">
                <Navbar.Brand>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"
                          className="donateForm">
                        <input type="hidden" name="cmd" value="_s-xclick"/>
                        <input type="hidden" name="hosted_button_id" value="NWWTRPY5NF8T8"/>
                        <input type="submit" name="submit" value="Donate Now!" alt="Donate Now"
                               className="btn btn-danger glow-button"/>
                    </form>                            
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav fill className="mr-auto">
                        <Nav.Item className="nav-link">
                            <Nav.Link to="/home" eventKey="1" as={Link}>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-link">                                    
                            <Nav.Link to="/programs" eventKey="2" as={Link}>Programs</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-link">                                    
                            <Nav.Link to="/prayertimes" eventKey="3" as={Link}>Prayer Times</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-link">                                    
                            <Nav.Link to="/donations" eventKey="4" as={Link}>Donations</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-link">                                    
                            <Nav.Link to="/contactus" eventKey="5" as={Link}>Contact Us</Nav.Link>
                        </Nav.Item>
                    </Nav>

                </Navbar.Collapse> */}
                </Navbar> 

            <SubHeader />
        </div>
    );
};


export default Header;