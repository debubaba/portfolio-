import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Home from './components/index.js'
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from './components/Resume.js'
import Portfolio from './components/Portfolio.js'

function App() {
  return (
    <>
      <CssBaseline/>
      <Route exact path="/" component={Home} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Portfolio} />

    </>
  );
}

export default App;
