import React from "react";
import Iqama from "./Iqama";
import iqamaTimes from '../.../../data/iqama.json';
import { processIqama } from "../app/Functions";

import { currentMonth } from "../app/Functions";

import {
    Table
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

                    <div id="twitterfeed">
                        <a class="twitter-timeline" data-width="50%" data-height="200px" data-chrome="nofooter noheader"
                           href="https://twitter.com/sahabahservices"
                           data-tweet-limit="1">
                            Tweets by @sahabahservices</a>
                    </div>
        </div>
    );
};

export default Announcements;