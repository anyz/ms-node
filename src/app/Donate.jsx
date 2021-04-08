import React from "react";
import PlainContainer from "./layout/PlainContainer";

import {
    Card
    } from 'react-bootstrap';

const Donate = (props) => {

    return(
    <PlainContainer>
        <p></p>
        <Card>
        <Card.Header>Donate via PayPal</Card.Header>
        <Card.Body>
            <Card.Text>
            Donate using our automated PayPal account.
            </Card.Text>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"
                    className="donateForm">
                <input type="hidden" name="cmd" value="_s-xclick"/>
                <input type="hidden" name="hosted_button_id" value="NWWTRPY5NF8T8"/>
                <input type="submit" name="submit" value="Donate Now!" alt="Donate Now"
                        className="btn btn-danger glow-button"/>
            </form> 
        </Card.Body>
        </Card>

        <Card>
        <Card.Header>Donate via Direct Deposit</Card.Header>
        <Card.Body>
            <Card.Text>
            Donate directly from your bank account.
            </Card.Text>
            
        </Card.Body>
        </Card>

    </PlainContainer>
    );
};

export default Donate;
