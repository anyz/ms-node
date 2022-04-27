import React from "react";
import {
    Table
    } from 'react-bootstrap';

const RamadanEvents = (props) => {

    return(
        <div className="section">
            <h4 className="ramadan-event-section-header">Ramadan Events - 2022</h4>

            <h6>Community Iftar</h6>

            <div className="row ramadan-events-div">
                <div className="col">
                    <h6>Men</h6>
                    <span className="ramadan-events-small-text">@Masjid Sahabah</span>

                    <div className="row ramadan-events-dates">
                        <div className="col-4 iftar-dates">
                            Fri Apr 22
                        </div>
                        <div className="col-4 iftar-dates">
                            Sat Apr 23
                        </div>
                        <div className="col-4 iftar-dates">
                            Sun Apr 24
                        </div>                        
                        <div className="col-4 iftar-dates">
                            Fri Apr 29
                        </div>
                        <div className="col-4 iftar-dates">
                            Sat Apr 30
                        </div>
                        <div className="col-4 iftar-dates">
                             
                        </div>                                                
                    </div>
                    </div> 
            </div>
            <div className="row ramadan-events-div">
                <div className="col">
                    <h6>Women & Kids</h6>
                    <span className="ramadan-events-small-text">
                    <a target="_blank" href="https://www.google.com/maps/place/1400+SE+Waddell+Way,+Waukee,+IA+50263/@41.597666,-93.870581,17z/data=!4m2!3m1!1s0x87ec237361f8d355:0xd82a171a8fcd4051">
                        @Glenn Village Club House
                    </a></span>

                    <div className="row ramadan-events-dates">
                        <div className="col-12 iftar-dates">
                            Fri Apr 29
                        </div>                                                                        
                    </div>                         
                </div>
            </div>

            <p />
            <h6>Quiz competition for adults</h6>
            <span><a href="/quiz">Questions are available here</a></span>

            <p />
            <h6>Quran competition for kids</h6>
            <span>Please register your kids to participate</span>

            <p />
            <h6>Henna party for women</h6>
            <span>Details coming soon...</span>
        </div>    
    );
};

export default RamadanEvents;