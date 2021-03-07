import React from "react";
import * as PropTypes from "prop-types";

const SubHeader = () => {
    return(
    <header className="jumbotron subhead">
        <div className="container">
            <div className="row">
                <div className="col-md-3 logo-margin">
                    <img src="images/ms-logo-4.png" height="65px" width="185px"/>
                </div>
                <div className="col-md-9">

                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                        {/* <!-- Indicators --> */}
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>

                        {/* <!-- Wrapper for slides --> */}
                        <div className="carousel-inner">
                            <div className="item active">
                                <div className="carousel-content">
                                    <div>
                                        <h3 className="heading-color">Easier than ever to fulfill the most important commandment
                                            of Allah</h3>
                                        <span>The masjid is within 5 to 10 mins of driving distance from the surrounding community and observes all five prayers daily.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="carousel-content">
                                    <div>
                                        <h3 className="heading-color">Preparing our next generation</h3>
                                        <span>The masjid offers weekly Islamic teachings to girls between the ages 5 to 8 every Sunday</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="carousel-content">
                                    <div>
                                        <h3 className="heading-color">Generation of Islamic Scholars and Huffaz</h3>
                                        <span>Coming very soon the school for boys offering classes of Islamic Studies and Nazera &amp; Hifz</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div> {/* <!-- Carousel --> */}


                </div>
            </div>


        </div>
    </header>

    );
};


export default SubHeader;