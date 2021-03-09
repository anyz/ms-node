import React from "react";

import {
    Container,
    Row, Col, Image, Carousel, Card
    } from 'react-bootstrap';

const Future = (props) => {

    return(
            <Card>
                <Card.Header>
                    Future Plans
                </Card.Header>
                <Card.Body>
                    <Carousel pauseOnHover={true}>
                        <Carousel.Item>
                            <h3 className="heading-color">Easier than ever to fulfill the most important commandment
                                of Allah</h3>
                            <span>The masjid is within 5 to 10 mins of driving distance from the surrounding community and observes all five prayers daily.</span>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h3 className="heading-color">Preparing our next generation</h3>
                            <span>The masjid offers weekly Islamic teachings to girls between the ages 5 to 8 every Sunday</span>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h3 className="heading-color">Generation of Islamic Scholars and Huffaz</h3>
                            <span>Coming very soon the school for boys offering classes of Islamic Studies and Nazera &amp; Hifz</span>
                        </Carousel.Item>
                    </Carousel>
                </Card.Body>
            </Card>
    );
};

export default Future;