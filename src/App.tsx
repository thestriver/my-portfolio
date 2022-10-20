import React from 'react';
import './App.css';
import Articles from './components/Articles';
import Intro from './components/Intro' ;
import Projects from './components/Projects';

const App: React.FC = () => { 
  const date : Date = new Date();
  const currentYear: number = date.getFullYear();
  return (
      <div className="App">
        <Intro /> 
        <Projects />
        <Articles />
       
        <footer className="text-center mt-20 text-white"> 
          <div className="pb-2">
          {/* eslint-disable-next-line */}
          &copy;{currentYear} <span>Mahmud Adeleye 🚀  | Made with ❤ </span>
          </div>
        </footer>

      </div>
  );
}

export default App;


