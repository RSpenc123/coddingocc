import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Homepage from "./Components/Homepage"
import Class from "./Components/class"
import Nav from "./Components/nav"
import Worker from "./Components/Worker"
import Customers from "./Components/Cutomers"
import Contact from "./Components/Contact"
import Services from './Components/Services';
import Apply from "./Components/Apply"
import About from './Components/about';

export default (
    <Switch>
        <Route exact path = '/' component={Homepage}/>
        <Route path = "/Class1" component={Class}/>
        <Route path = "/Nav" component={Nav}/>
        <Route path = "/Job" component={Worker}/>
        <Route path = "/Customers" component={Customers}/>
        <Route path = "/Contact" component={Contact}/>
        <Route path = "/Services" component={Services}/>
        <Route path = "/Apply" component={Apply}/>
        <Route path = "/About" component={About}/>


        
    </Switch>
)