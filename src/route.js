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
import News from "./Components/news"
import Testimonials from "./Components/Testimonials"
import Dropdown from "./Components/dropdown"
import Header from "./Components/Header"
import News1 from "./Components/News-article/news1"
import News2 from "./Components/News-article/news2"

export default (
    <Switch>
        <Route exact path = '/' component={Nav}/>
        <Route path = "/Class1" component={Class}/>
        <Route path = "/Nav" component={Nav}/>
        <Route path = "/Job" component={Worker}/>
        <Route path = "/Customers" component={Customers}/>
        <Route path = "/Contact" component={Contact}/>
        <Route path = "/Services" component={Services}/>
        <Route path = "/Apply" component={Apply}/>
        <Route path = "/About" component={About}/>
        <Route path = "/News" component={News}/>
        <Route path = "/Testimonials" component={Testimonials}/>
        <Route path = "/Dropdown" component={Dropdown}/>
        <Route path = "/Header" component={Header}/>
        <Route path = "/News1" component={News1}/>
        <Route path = "/News2" component={News2}/>

        
    </Switch>
)