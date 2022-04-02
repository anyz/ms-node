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
                <div className="col-6">
                    <h6>Men</h6>
                    <span className="ramadan-events-small-text">@Masjid Sahabah
                    <br /> 14225 University Ave</span>

                    <div className="row ramadan-events-dates">
                        <div className="col-6 iftar-dates">
                            Sat Apr 9th
                        </div>
                        <div className="col-6 iftar-dates">
                            Sun Apr 10th
                        </div>
                        <div className="col-6 iftar-dates">
                            Fri Apr 15th
                        </div>
                        <div className="col-6 iftar-dates">
                            Sat Apr 16th
                        </div>
                        <div className="col-6 iftar-dates">
                            Fri Apr 22nd
                        </div>
                        <div className="col-6 iftar-dates">
                            Sat Apr 23rd
                        </div>
                        <div className="col-6 iftar-dates">
                            Fri Apr 29th
                        </div>
                        <div className="col-6 iftar-dates">
                            Sat Apr 30th
                        </div>                        
                    </div>


                </div>
                <div className="col-6">
                    <h6>Women & Kids</h6>
                    <span className="ramadan-events-small-text">@Ridge Pointe Pavilion 
                    <br /><a target="_blank" href="https://www.google.com/maps/place/655+SE+Legacy+Pointe+Blvd,+Waukee,+IA+50263/@41.6072467,-93.8419732,17z/data=!4m6!1m3!3m2!1s0x87ec23f2775f9399:0xba197ef0371cabd0!2s655+SE+Legacy+Pointe+Blvd,+Waukee,+IA+50263!3m1!1s0x87ec23f2775f9399:0xba197ef0371cabd0">
                         655 SE Legacy Pointe Blvd. </a></span>

                    <div className="row ramadan-events-dates">
                        <div className="col-12 iftar-dates">
                            Sun Apr 10th
                        </div>
                        <div className="col-12 iftar-dates">
                            Fri Apr 15th
                        </div>
                        <div className="col-12 iftar-dates">
                            Fri Apr 22nd
                        </div>
                        <div className="col-12 iftar-dates">
                            Fri Apr 29th
                        </div>                                                                        
                    </div>                         
                </div>
            </div>

            <p />
            <h6>Quiz competition for adults</h6>
            <span>Questions will be given after taraweeh salah every night</span>

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