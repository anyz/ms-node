import React from "react";

import {
    Card, Container
    } from 'react-bootstrap';

const Location = (props) => {

    return(
        <Container>
            <Card>
                <Card.Header>
                    Location
                </Card.Header>
                <Card.Body>
                    <div id="location">
                        <iframe width="250" height="350" frameborder="0" style={{border:0}}
                                src="https://www.google.com/maps/embed/v1/place?q=14225%20University%20Ave%20%23270%2C%20Waukee%2C%20IA%2050263%2C%20United%20States&key=AIzaSyD2xetCl4r0SQNAZOkXeROX96mGhNp4XzI"
                                title="Location">
                        </iframe>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Location;