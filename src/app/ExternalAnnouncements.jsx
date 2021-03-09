import React from "react";

import {
    Card, Container
    } from 'react-bootstrap';

const ExternalAnnouncements = (props) => {

    return(
        <Container>
            <Card>
                <Card.Header>
                    External Announcements
                </Card.Header>
                <Card.Body>
                    <div>
                        <a className="twitter-timeline" data-width="50%" data-height="300px" data-chrome="nofooter noheader"
                           href="https://twitter.com/chicagohilal"
                           data-tweet-limit="1">
                            Tweets by @chicagohilal</a>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ExternalAnnouncements;