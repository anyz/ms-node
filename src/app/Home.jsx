import React from "react";
import MainContainer from "../app/layout/MainContainer";
import Announcements from "./Announcements";
import ExternalAnnouncements from "./ExternalAnnouncements";
import Location from "./Location";
import Future from "./Future";


const Home = (props) => {

    return(
    <MainContainer>
        <div className="section">
            <h3 className="section-header">Assalaamualaikum WRWB</h3>
            <h6>Ahlan wa sahlan!!!</h6> Alhamdulillah daily and Juma'a (@ 1:30pm all year) salaats are performed here.
                    <p/>
                    <p>In sha Allah we'll be following the local (USA) moonsighting (hilal) for all the islamic months (<a
                            href="http://www.chicagohilal.org" target="_chicagohilal">www.chicagohilal.org</a>).</p>
                    <p/>
                    <p>JazakAllahu Khayran</p>
        </div> 
        <Future />
        <Announcements />
        <ExternalAnnouncements />
        <Location />
    </MainContainer>
    );
};

export default Home;
