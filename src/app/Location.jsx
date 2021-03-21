import React from "react";

const Location = (props) => {

    return(
        <div className="section">
            <h3 className="section-header">Location</h3>
            <div id="location">
                        <iframe width="250" height="350" frameBorder="0" style={{border:0}}
                                src="https://www.google.com/maps/embed/v1/place?q=14225%20University%20Ave%20%23270%2C%20Waukee%2C%20IA%2050263%2C%20United%20States&key=AIzaSyD2xetCl4r0SQNAZOkXeROX96mGhNp4XzI"
                                title="Location">
                        </iframe>
                    </div>
        </div>
    );
};

export default Location;