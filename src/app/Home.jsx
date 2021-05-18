import React, { Suspense } from "react";
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
        <Suspense fallback={<div>Loading...</div>}></Suspense>

    <Row>
        <Col className="funraising-text">Please join our Online Fund Raising Event and share with your friends and family...</Col>
    </Row>
        <p>
            
            <Button variant="outline-success" size="lg" className="special-button"
            href="https://www.launchgood.com/campaign/expanding_the_only_masjid_in_waukee_iowa__masjid_sahabah" 
            target="_new">Click For Online Fund Raising</Button>
        </p>

        <p>
            
            <Button variant="outline-primary" size="lg" className="special-button"
            href="/donate">More Donation Options</Button>
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
