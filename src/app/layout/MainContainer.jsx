import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import {
    Container
    } from 'react-bootstrap';

const MainContainer = (props) => {

    const {
        children
    } = props;

    return (
    <div>
        <Header />
        <Container>
            {children}
        </Container>
        <Footer />
    </div>
    );
};

export default MainContainer;