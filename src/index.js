import React, {useState} from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import {CarToolContainer} from './containers/CarToolContainer';
import {carStore} from "./carStore";



ReactDOM.render(
    <Provider store={carStore}>
        <CarToolContainer/>
    </Provider>,
    document.querySelector('#root'),

);
/*const cars = [
    { id:1, make:'Ford', model:'Fusion', year:'2018', color:'black', price:'2006'},
    { id:2, make:'Tesla', model:'S', year:'2018', color:'red', price:'4555'},

];*/






