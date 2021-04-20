import React from "react";
import SubHeader from "./SubHeader";

import {
    Row, Col, Image, Navbar, Nav
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
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/donate">Donations</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>

            <SubHeader />
        </div>
    );
};


export default Header;