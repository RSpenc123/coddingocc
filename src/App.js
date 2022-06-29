import React from 'react';
import './App.css';
import Route from "./route"
import {HashRouter} from 'react-router-dom'
import Header from './Components/Header';


function App() {
  return (
    <HashRouter>
      <Header/>
    <div className="App">
    {Route}

    </div>
    </HashRouter>
  );
}

export default App;
