import React from "react";
import * as PropTypes from "prop-types";
import NavLink from "./NavLink";
import SubHeader from "./SubHeader";

import { currentDate } from "../../app/Functions";

const Header = (props) => {
    const {
        section
    } = props;

    return(
        <div>
            <div id="header">
                <header className="navbar navbar-inverse ms-header navbar-fixed-top">
                    <div className="container">
                        <div className="collapse navbar-collapse">
                            <div className="row">
                                <div className="col-md-4">
                                    <div>{ currentDate() }</div>
                                </div>
                                <div className="col-md-4">
                                    <img src="/images/header.png" height="35px" width="215px" alt="Home"/>
                                </div>

                                <ul className="nav navbar-nav navbar-right">
                                    <li><span className="glyphicon glyphicon-home"></span> 14225 University Ave # 270, Waukee, IA 50263
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div>
                            <ul className="nav nav-pills nav-justified">
                                <li>
                                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"
                                          className="donateForm">
                                        <input type="hidden" name="cmd" value="_s-xclick"/>
                                        <input type="hidden" name="hosted_button_id" value="NWWTRPY5NF8T8"/>
                                        <input type="submit" name="submit" value="Donate Now!" alt="Donate Now"
                                               className="btn btn-danger glow-button"/>
                                    </form>

                                </li>

                                <NavLink title="Home" link="/home" active={section === "home"}/>
                                <NavLink title="Programs" link="/programs" active={section === "programs"}/>
                                <NavLink title="Prayer Times" link="/prayertimes" active={section === "prayertimes"}/>
                                <NavLink title="Donations" link="/donations" active={section === "donations"}/>
                                <NavLink title="Contact Us" link="/contactus" active={section === "contactus"}/>
                            </ul>
                        </div>


                    </div>

                </header>
            </div>

            <SubHeader />
        </div>
    );
};

Header.propTypes = {
    section: PropTypes.string.isRequired
};

export default Header;