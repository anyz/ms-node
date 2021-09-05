import React from "react";
import Iqama from "./Iqama";
import iqamaTimes from '../.../../data/iqama.json';
import { processIqama } from "../app/Functions";

import { currentMonth } from "../app/Functions";

import {
    Table, Accordion, Card
    } from 'react-bootstrap';

const Announcements = (props) => {

    const itimes = processIqama([...iqamaTimes]);
    return(
        <div className="section">
            <h3 className="section-header">Announcements</h3>
            <h6>Iqama Times - { currentMonth() } </h6>
                    <Table hover bordered size="sm" responsive>
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Fajr</th>
                            <th>Zuhr</th>
                            <th>Asr</th>
                            <th>Maghrib</th>
                            <th>Isha</th>
                        </tr>
                        </thead>
                        <tbody>
                            {itimes.map((itime, index) =>  <Iqama key={index} iqamaRow={itime}/> )}
                        </tbody>
                    </Table>
                    <p>
                        <strong>Jum'a: 1:30PM (all year)</strong>
                    </p>
                    <p>
                        For monthly calander please visit: <a href="https://www.islamicfinder.org/prayer-times/#monthly" target='_blank' rel="noreferrer">Monthly Calander</a>
                    </p>

                    <div id="twitterfeed">
                        <a className="twitter-timeline" data-width="50%" data-height="200px" data-chrome="nofooter noheader"
                           href="https://twitter.com/sahabahservices"
                           data-tweet-limit="1">
                            Tweets by @sahabahservices</a>
                    </div>

<Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1" className="non-header">
      View Past tweets
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <div>
            <a className="twitter-timeline" data-width="50%" data-height="200px" data-chrome="nofooter noheader"
                href="https://twitter.com/sahabahservices"
                data-tweet-limit="5">
                Tweets by @sahabahservices</a>
        </div>

      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>                  
        </div>
    );
};

export default Announcements;