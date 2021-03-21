import React from "react";

const Lectures = (props) => {
    return(
        <div className="section">
            <h3 className="section-header">Lectures</h3>
            <div id="lectures" className="youtube-div">
                <iframe className="youtube-iframe"
                    src="https://www.youtube.com/embed/TLeXJ-kw6JY" 
                    title="Friday Lecture" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen></iframe>
                    
            </div>
        </div>
    );
};

export default Lectures;