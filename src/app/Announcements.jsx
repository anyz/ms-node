import React from "react";
import Iqama from "./Iqama";
import {map} from "lodash";
import iqamaTimes from '../.../../data/iqama.json';
import { processIqama } from "../app/Functions";

import { currentMonth } from "../app/Functions";

import {
    Card, Container, Table
    } from 'react-bootstrap';

const Announcements = (props) => {

    const itimes = processIqama([...iqamaTimes]);
    return(
        <Container>
            <Card>
                <Card.Header>
                    Announcements
                </Card.Header>
                <Card.Body>
                    <h5>Iqama Times - { currentMonth() } </h5>
                    <Table hover bordered size="sm" responsive>
                        <thead>
                        <tr>
                            <th>Start Date</th>
                            <th>Fajr</th>
                            <th>Zuhr</th>
                            <th>Asr</th>
                            <th>Maghrib</th>
                            <th>Isha</th>
                        </tr>
                        </thead>
                        <tbody>
                            {map(itimes, (tableRow) =>  <Iqama key={tableRow.labelDate} iqamaRow={tableRow}/> )}
                        </tbody>
                    </Table>

                    <div id="twitterfeed">
                        <a class="twitter-timeline" data-width="50%" data-height="200px" data-chrome="nofooter noheader"
                           href="https://twitter.com/sahabahservices"
                           data-tweet-limit="1">
                            Tweets by @sahabahservices</a>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Announcements;