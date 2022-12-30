import React from "react";
import { formatIqamaDate } from "../app/Functions";

const Iqama = (props) => {
    const {iqamaRow} = props;

    return(
    <>
        <tr>
            <td>{formatIqamaDate(iqamaRow.value.labelDate)}</td>
            <td>{iqamaRow.value.fajar}</td>
            <td>{iqamaRow.value.zohar}</td>
            <td>{iqamaRow.value.asar}</td>
            <td>{iqamaRow.value.magrib}</td>
            <td>{iqamaRow.value.isha}</td>
        </tr>
    </>
    );

};

export default Iqama;