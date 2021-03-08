import React from 'react';
import {render} from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import router from "./router";

render(
    <>
        {router}
    </>,
    document.getElementById('root')
);