import React from "react";

import {
    Image, Carousel
    } from 'react-bootstrap';

const Activities = (props) => {
    const imageWidth = {
        width: "350px",
        height: "260px"
    };

    return(
        <div className="section">
            <h3 className="section-header">Activities</h3>
            <h6>Masjid Sahabah Eid-Ul-Fitr 2021</h6>
            <div className="section">
                <div id="eid2021" className="youtube-div">
                    <iframe className="youtube-iframe"
                        src="https://www.youtube.com/embed/JMFn2ImU0tQ" 
                        title="Eid-UlFitr 2021" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen></iframe>
                        
                </div>
            </div>            
{/*             <div className="future-carousel-body-content">
                    <Carousel className="future-carousel">
                        <Carousel.Item>
                            <Image src="images/eid_drive/1.jpg" alt="Masjid Sahabah" style={imageWidth}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="images/eid_drive/3.jpg" alt="Masjid Sahabah"  style={imageWidth}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="images/eid_drive/7.jpg" alt="Masjid Sahabah"  style={imageWidth}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="images/eid_drive/9.jpg" alt="Masjid Sahabah"  style={imageWidth}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="images/eid_drive/10.jpg" alt="Masjid Sahabah"  style={imageWidth}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="images/eid_drive/12.jpg" alt="Masjid Sahabah"  style={imageWidth}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="images/eid_drive/13.jpg" alt="Masjid Sahabah"  style={imageWidth}/>
                        </Carousel.Item>
                    </Carousel>
            </div>  */}
            <p />      

            <h6>Eid Favors</h6>
            <div className="future-carousel-body-content">
                    <Carousel className="future-carousel">
                        <Carousel.Item>
                            <Image src="images/eid_favors/1.jpg" alt="Masjid Sahabah" style={imageWidth}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="images/eid_favors/2.jpg" alt="Masjid Sahabah"  style={imageWidth}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="images/eid_favors/4.jpg" alt="Masjid Sahabah"  style={imageWidth}/>
                        </Carousel.Item>
                    </Carousel>
            </div> 
            <p /> 

            <h6>Masjid Sahabah Mask Donation</h6>
            <div className="future-carousel-body-content">
                    <Carousel className="future-carousel">
                        <Carousel.Item>
                            <Image src="images/masks/1.jpg" alt="Masjid Sahabah" style={imageWidth}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="images/masks/2.jpg" alt="Masjid Sahabah"  style={imageWidth}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="images/masks/3.jpg" alt="Masjid Sahabah"  style={imageWidth}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="images/masks/4.jpg" alt="Masjid Sahabah"  style={imageWidth}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="images/masks/5.jpg" alt="Masjid Sahabah"  style={imageWidth}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="images/masks/6.jpg" alt="Masjid Sahabah"  style={imageWidth}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="images/masks/7.jpg" alt="Masjid Sahabah"  style={imageWidth}/>
                        </Carousel.Item>                                                                        
                    </Carousel>
            </div>             
        </div>
    );
};

export default Activities;