import React from "react";
import * as PropTypes from "prop-types";
import SubHeader from "./SubHeader";

import {
    Container,
    Navbar,
    Nav, Row, Col, Image
    } from 'react-bootstrap';

import { currentDate } from "../../app/Functions";

const Header = (props) => {
    const {
        section
    } = props;

    return(
        <div>
        <div className="bg-dark navbar">
            <Row>
                <Col md={4}>
                    <div className="white-text">{ currentDate() }</div>
                </Col>
                <Col md={4}>
                    <Image src="/images/header.png" height="35px" width="215px" alt="Bismillah" />
                </Col>
                <Col md={4} >
                    <div className="float-right white-text">
                        14225 University Ave # 270, Waukee, IA 50263
                    </div>
                </Col>
            </Row>
            </div>
            <div id="header">
                <div className="bg-dark navbar">
                    <Container>
                        <Row>
                        <Col>
                            <Nav fill>
                                <Nav.Item className="nav-link">
                                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"
                                      className="donateForm">
                                    <input type="hidden" name="cmd" value="_s-xclick"/>
                                    <input type="hidden" name="hosted_button_id" value="NWWTRPY5NF8T8"/>
                                    <input type="submit" name="submit" value="Donate Now!" alt="Donate Now"
                                           className="btn btn-danger glow-button"/>
                                </form>
                                </Nav.Item>
                                <Nav.Item className="nav-link">
                                    <Nav.Link href="/home">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="nav-link">
                                    <Nav.Link href="/programs">Programs</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="nav-link">
                                    <Nav.Link href="/prayertimes">Prayer Times</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="nav-link">
                                    <Nav.Link href="/donations">Donations</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="nav-link">
                                    <Nav.Link href="/contactus">Contact Us</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <SubHeader />
        </div>
    );
};

Header.propTypes = {
    section: PropTypes.string.isRequired
};

export default Header;