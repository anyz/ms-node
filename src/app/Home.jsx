import React from "react";
import MainContainer from "../app/layout/MainContainer";
import Announcements from "./Announcements";
import ExternalAnnouncements from "./ExternalAnnouncements";
import Location from "./Location";
import Future from "./Future";

import {
    Card
    } from 'react-bootstrap';


const Home = (props) => {

    return(
    <MainContainer>
            <Card>
                <Card.Header>
                    Assalaamualaikum WRWB
                </Card.Header>
                <Card.Body>
                    <h5>Ahlan wa sahlan!!!</h5> Alhamdulillah daily and Juma'a (@ 1:30pm all year) salaats are performed here.
                    <p/>
                    <p>In sha Allah we'll be following the local (USA) moonsighting (hilal) for all the islamic months (<a
                            href="http://www.chicagohilal.org" target="_chicagohilal">www.chicagohilal.org</a>).</p>
                    <p/>
                    <p>JazakAllahu Khayran</p>

                </Card.Body>
            </Card>
        <Future />
        <Announcements />
        <ExternalAnnouncements />
    </MainContainer>
    );
};

export default Home;
