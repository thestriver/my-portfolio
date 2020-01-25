import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Projects from './Projects';

function App() { 
  
  return (
    <BrowserRouter>
      <div>

        {/* setting up router
        <Route exact path="/" component={} />
        <Route exact path="/" component={} /> */}
        

        <nav className="dt w-100 border-box pa1 ph6-ns">
          <img src={logo} className="dib w4 h4 br-100" alt="Mahmud"/>
          <div class="dtc v-mid w-75 tr">
            <Link to="/" href=""  className="link dim dark-gray f4 f4-ns dib mr3 mr4-ns">Projects</Link>
            <Link to="" href=""  className="link dim dark-gray f4 f4-ns dib mr3 mr4-ns">Contact</Link>
          </div>
        </nav>

        <div className="pv5 f4 f2-ns measure center pr3 pl3 justify-center">
          <h1 className="fw6 f1 fl w-100 black-70 mt0 mb3 sans-serif">Hi! <span> 👋</span> It's a pleasure to have you here.</h1>
          <p className="db lh-copy black-70 serif fw1 mv0 f4 f3-m f2-l measure-wide monaco">I'm Mahmud Adeleye - a UK based 
          software developer currently in a MSc. Computing Science program. Looking for opportunities to create awesome stuff 
          that matter. 
          </p>

          <div className="pv4 f5">
            <a className="f3 link underline pv4 pr4" href="/portfolio_img/MAHMUD_CV.pdf">Resume</a>
            <a className="f3 link underline pv4 pr4" href="https://github.com/thestriver">GitHub</a>
            <a className="f3 link underline pv4 pr4" href="https://www.linkedin.com/in/mahmudadeleye/">LinkedIn</a>
          </div>
         
        </div>
        

        <h1 className="tc">Projects I've Worked On</h1>
        <Projects />

        <div className="mh6 mt7-l ma6">
          <h2 class="lh-title f3 b">
          I'm always interested in exciting ideas and projects and it would be a pleasure to work with you.<br/>
          Want to drop by and say hi? Send me a mail: <a href="mailto:hi@adeleyemahmud.com">hi[at]adeleyemahmud.com</a> or find me on <a href="linkedin.com/in/mahmudadeleye/">LinkedIn</a>
          </h2>
        </div>
        
        
        <footer className="tc mb5"> 
          <div>
          &copy;{(new Date().getFullYear())} <span>Mahmud Adeleye 🚀 | Made with ❤ </span>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;


