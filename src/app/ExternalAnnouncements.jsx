import React from "react";

const ExternalAnnouncements = (props) => {

    return(
        <div className="section">
            <h3 className="section-header">External Announcements</h3>
            <div>
                        <a className="twitter-timeline" data-width="50%" data-height="300px" data-chrome="nofooter noheader"
                           href="https://twitter.com/chicagohilal"
                           data-tweet-limit="1">
                            Tweets by @chicagohilal</a>
                    </div>            
        </div>
    );
};

export default ExternalAnnouncements;