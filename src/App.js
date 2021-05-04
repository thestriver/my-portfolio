import React from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro' ;
import Projects from './components/Projects';
import Contact from './components/Contact' ;

function App() { 
  
  return (
      <div>
        <nav className="dt w-100 border-box pa1 ph6-ns">
          <img src={logo} className="dib w4 h4-ns h3 pt2 pt0-ns br-100-ns" alt="logo"/>
          <div className="dtc v-mid w-75 tr">
          </div>
        </nav>
        
        <Intro /> 
        <Projects />
        <Contact />
       
        <footer className="tc mt5 mb4"> 
          <div className="pb4">
          {/* eslint-disable-next-line */}
          &copy;{(new Date().getFullYear())} <span>Mahmud Adeleye 🚀 | Made with ❤ </span>
          </div>
        </footer>

      </div>
  );
}

export default App;


