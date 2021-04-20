import React from "react";
import MainContainer from "../app/layout/MainContainer";
import Announcements from "./Announcements";
import ExternalAnnouncements from "./ExternalAnnouncements";
import Location from "./Location";
import Future from "./Future";
import Lectures from "./Lectures";
import Programs from "./Programs";
import Activities from "./Activities";

import {
    Button, Row, Col
    } from 'react-bootstrap';


const Home = (props) => {

    return(
    <MainContainer>

    <Row>
        <Col className="funraising-text">Participate in our Ramadan Fund Raising Event and share with your friends and family...</Col>
    </Row>
        <p>
            
            <Button variant="outline-success" size="lg" className="special-button"
            href="https://www.launchgood.com/campaign/expanding_the_only_masjid_in_waukee_iowa__masjid_sahabah" 
            target="_new">Click For Fund Raising Event</Button>
        </p>

        <Announcements />
        <Future />
        <Activities />
        <ExternalAnnouncements />
        <Lectures />
        <Programs />
        <Location />
    </MainContainer>
    );
};

export default Home;
