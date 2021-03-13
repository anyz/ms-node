import React from "react";
import { currentYear } from "../../app/Functions";


const Footer = () => {
    return(
        <div className="footer">
        	<p>
        		14225 University Ave # 270, Waukee, IA 50263
        	</p>            
        	&copy; { currentYear() } <a href='http://www.masjidsahabah.com'>masjidsahabah.com</a> All rights reserved.
        </div>
    );
};


export default Footer;