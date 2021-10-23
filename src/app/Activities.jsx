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

            <p />      

            <h6>Masjid Sahabah Iftar 2021</h6>
            <div className="section">
                <div id="iftar2021" className="youtube-div">
                    <iframe className="youtube-iframe"
                        src="https://www.youtube.com/embed/EJneP-et49Q" 
                        title="Iftar 2021" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen></iframe>
                        
                </div>
            </div>  
            <p /> 
            <h6>Masjid Sahabah Award Night 2021</h6>
            <div className="section">
                <div id="awards2021" className="youtube-div">
                    <iframe className="youtube-iframe"
                        src="https://www.youtube.com/embed/VtJ4WtOSc8E" 
                        title="Awards 2021" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen></iframe>
                        
                </div>
            </div>  
            
        </div>
    );
};

export default Activities;