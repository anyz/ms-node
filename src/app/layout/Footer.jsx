import React from "react";
import { currentYear } from "../../app/Functions";

import {
    Container
    } from 'react-bootstrap';

const Footer = () => {
    return(
            <div className="footer">
                &copy; { currentYear() } <a href='http://www.masjidsahabah.com'>masjidsahabah.com</a> All rights reserved.
            </div>
    );
};


export default Footer;