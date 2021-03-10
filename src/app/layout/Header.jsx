import React from "react";
import * as PropTypes from "prop-types";
import SubHeader from "./SubHeader";
import { Link } from 'react-router-dom';

import {
    Container,
    Nav, Row, Col, Image, Navbar
    } from 'react-bootstrap';

import { currentDate } from "../../app/Functions";

const Header = (props) => {

    return(
        <div>
            <div className="bg-dark navbar">
            <Row>
                <Col className="ms-header-col">
                    <Image src="/images/header.png" height="35px" width="215px" alt="Bismillah" />
                </Col>
            </Row>            
            </div>

                <Navbar collapseOnSelect bg="dark" expand="lg">
                <Navbar.Brand>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"
                          className="donateForm">
                        <input type="hidden" name="cmd" value="_s-xclick"/>
                        <input type="hidden" name="hosted_button_id" value="NWWTRPY5NF8T8"/>
                        <input type="submit" name="submit" value="Donate Now!" alt="Donate Now"
                               className="btn btn-danger glow-button"/>
                    </form>                            
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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

                </Navbar.Collapse>
                </Navbar> 

            <SubHeader />
        </div>
    );
};

Header.propTypes = {
    section: PropTypes.string.isRequired
};

export default Header;