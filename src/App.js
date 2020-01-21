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
        

        <nav className="dt w-100 border-box pa3 ph5-ns">
          <img src={logo} class="dib w2 h4 br-100" alt="Mahmud"/>
          <div class="dtc v-mid w-75 tr">
            <Link to="/" href=""  className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Projects</Link>
            <Link to="" href=""  className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Contact</Link>
          </div>
        </nav>

        <div className="pv5 f4 f2-ns measure center">
          <h1 className="fw6 f1 fl w-100 black-70 mt0 mb3 sans-serif">Hi! 👋 It's a pleasure to have you here.</h1>
          <p className="db lh-copy black-70 serif fw1 mv0 f4 f3-m f2-l measure-wide baskerville">I'm Mahmud Adeleye - a UK based 
          software developer currently in a MSc. Computing Science program. Looking for opportunities to create awesome stuff 
          that matter. 
          </p>
          <a className="f6 link dim ph3 pv2 mb2 ml5 mr5 dib white bg-dark-green pointer:hover" href="/portfolio_img/MAHMUD_CV.pdf">Resume</a>
          <a class="link near-black hover-silver dib mh3 tc" href="https://github.com/thestriver" title="GitHub">
          <svg class="dib h1 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
          <span class="f6 db">GitHub</span>
          </a>
          
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


