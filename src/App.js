import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Intro from './Intro' ;
import Projects from './Projects';
import Contact from './Contact' ; 
import Darkmode from './Darkmode'

function App() { 
  
  return (
    <Router>
      <div>

        {/* setting up router
        <Route exact path="/" component={} />
        <Route exact path="/" component={} /> */}
        

        <nav className="dt w-100 border-box pa1 ph6-ns">
          <img src={logo} className="dib w4 h4 br-100" alt="Mahmud"/>
          <div className="dtc v-mid w-75 tr">
            {/* <Link to="" className="link dim dark-gray f4 f4-ns dib mr3 mr4-ns">Projects</Link>
            <Link to="" className="link dim dark-gray f4 f4-ns dib mr3 mr4-ns">Contact</Link>
            {/* <Route exact path="/projects" component={Projects} /> */}
            {/* <Route exact path="/contact" component={Contact} /> */}
          </div>
        </nav>
        
        <Intro /> 
        <Projects />
        <Contact />
       
        <footer className="tc mt5 mb2"> 
          <div>
          &copy;{(new Date().getFullYear())} <span>Mahmud Adeleye 🚀 | Made with ❤ </span>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;


