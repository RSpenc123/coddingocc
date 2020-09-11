import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Homepage from "./Components/Homepage"
import Class from "./Components/class"

export default (
    <Switch>
        <Route exact path = '/' component={Homepage}/>
        <Route path = "/Class1" component={Class}/>
        
    </Switch>
)