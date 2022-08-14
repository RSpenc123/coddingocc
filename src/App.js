import React from 'react';
import './App.css';
import Route from "./route"
import {HashRouter} from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/footer';


function App() {
  return (
    <HashRouter>
      <Header/>
    <div className="App">
    {Route}

    </div>
    <Footer/>
    </HashRouter>
  );
}

export default App;
