import React from "react";

import {
    Image, Carousel
    } from 'react-bootstrap';

const Future = (props) => {

    return(
        <div className="section">
            <h3 className="section-header">Future Plans</h3>
            <div className="future-carousel-body-content">
                    <Carousel className="future-carousel">
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
            <p></p>
            <h6>Future Programs</h6>
            
            <p>The Muslim community has increased tremendously in 
                the recent times due to which the following needs are required</p>
            <div>
				<ul>
					<li>300+ person space for Salaat</li>
					<li>Ladies space for Salaat (currently not available)</li>
					<li>Community Event space</li>
					<li>Wudu Area</li>
					<li>Islamic Library</li>
					<li>Activity and Islamic learning space for children</li>
					<li>Funeral services space</li>
					<li>Parking Lot</li>  
				</ul>
                <p>To accommodate the Islamic needs of Muslims we purchased a land of 0.94 Acre. Architectural plans for the construction are
                        in progress and are being finalized.
                    </p>                
			</div>           
        </div>
    );
};

export default Future;