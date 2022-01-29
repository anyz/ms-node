import React from "react";
import PlainContainer from "./layout/PlainContainer";

import {
    Card
    } from 'react-bootstrap';

const Donate = (props) => {

    return(
    <PlainContainer>
        <p>
            <strong>All donations are Tax Deductible. Tax ID: 46-4192590</strong>
        </p>
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
                <input type="submit" name="submit" value="Donate Thru PayPal" alt="Donate Thru PayPal"
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
            <table>
                <tr>
                    <th>Bank Name:</th>
                    <td>MidWestOne Bank</td>
                </tr>
                <tr>
                    <th>Routing Number:</th>
                    <td>073900522</td>
                </tr>                
                <tr>
                    <th>Account:</th>
                    <td>2653022018</td>
                </tr>                  
            </table>
            
        </Card.Body>
        </Card>

        <Card>
        <Card.Header>Donate via Check</Card.Header>
        <Card.Body>
            <Card.Text>
            Please make your check payable to: <p/>
            Sahabah Services<br/>
            14225 University Ave #270,<br/>
            Waukee, IA - 50263 USA
            </Card.Text>
        </Card.Body>
        </Card>
    </PlainContainer>
    );
};

export default Donate;
