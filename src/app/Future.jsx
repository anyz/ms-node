import React from "react";

import {
    Container,
    Image, Carousel, Card
    } from 'react-bootstrap';

const Future = (props) => {

    return(
        <Container>
            <Card>
                <Card.Header>
                    Future Plans
                </Card.Header>
                <Card.Body className="future-carousel-body">
                    <div className="future-carousel-body-content">
                    <Carousel className="future-carousel">
                        <Carousel.Item>
                            <Image src="images/slides/slide1.png" alt="Masjid Sahabah" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="images/slides/slide2.png" alt="Masjid Sahabah" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="images/slides/slide3.png" alt="Masjid Sahabah" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="images/slides/slide4.png" alt="Masjid Sahabah" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="images/slides/slide5.png" alt="Masjid Sahabah" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="images/slides/slide6.png" alt="Masjid Sahabah" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="images/slides/slide7.png" alt="Masjid Sahabah" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="images/slides/slide8.png" alt="Masjid Sahabah" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="images/slides/slide9.png" alt="Masjid Sahabah" />
                        </Carousel.Item>
                    </Carousel>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Future;