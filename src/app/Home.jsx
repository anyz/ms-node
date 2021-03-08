import React from "react";
import Header from "../app/layout/Header";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Home = (props) => {

    return(
    <div>
        <Header
            section="home">
        </Header>
            <div>Welcome!!!</div>
            <Navbar className="navbar navbar-inverse ms-header navbar-fixed-top">
                <Nav className="ms-header">
                    <Nav.Link href="#">Home</Nav.Link>
                </Nav>
            </Navbar>

    </div>
    );
};

export default Home;
