import React from 'react';
import './App.css';
import Route from "./route"
import {HashRouter} from 'react-router-dom'


function App() {
  return (
    <HashRouter>
    <div className="App">
    {Route}

    </div>
    </HashRouter>
  );
}

export default App;
