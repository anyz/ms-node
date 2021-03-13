import React from "react";

import {
    Container,
    Row, Col, Image, Jumbotron, Carousel
    } from 'react-bootstrap';

const SubHeader = () => {
    return(
    <header>
        <Jumbotron>
            <Container>
                <Row>
                    <Col md={3} className="logo-margin">
                    <Image src="images/ms-logo-4.png" height="65px" width="185px" alt="Masjid Sahabah" />
                    </Col>
                    <Col md={9}>
                        <Carousel className="subheader-carousel">
                            <Carousel.Item>
                                <h5 className="heading-color">Fulfill the most important commandment
                                    of Allah</h5>
                                <span>The masjid is within 5 to 10 mins of driving distance from the surrounding community and observes all five prayers daily.</span>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h5 className="heading-color">Preparing our next generation</h5>
                                <span>The masjid offers weekly Islamic teachings to girls between the ages 5 to 8 every Sunday</span>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h5 className="heading-color">Generation of Islamic Scholars and Huffaz</h5>
                                <span>Coming very soon the school for boys offering classes of Islamic Studies and Nazera &amp; Hifz</span>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    </header>

    );
};


export default SubHeader;