import './App.css';
import { Articles } from './components/Articles';
import {Intro }from './components/Intro' ;
import Projects from './components/Projects';

function App() { 
  
  return (
      <div className="App">
        <Intro /> 
        <Projects />
        <Articles />
       
        <footer className="text-center mt-20 text-white"> 
          <div className="pb-2">
          {/* eslint-disable-next-line */}
          &copy;{(new Date().getFullYear())} <span>Mahmud Adeleye 🚀 | Made with ❤ </span>
          </div>
        </footer>

      </div>
  );
}

export default App;


