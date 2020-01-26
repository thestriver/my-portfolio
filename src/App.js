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
          <h1 className="fw6 f1 fl w-100 black mt0 mb3 sans-serif">Hi! <span> 👋</span> It's a pleasure to have you here.</h1>
          <p className="db lh-copy black serif fw1 mv0 f4 f3-m f2-l measure-wide monaco">I'm Mahmud Adeleye - a UK based 
          software developer currently in a MSc. Computing Science program. Looking for opportunities to create awesome stuff 
          that matter. 
          </p>

          <div className="pv4 f5">
            <a className="f3 link underline dim pv4 pr4" href="/portfolio_img/MAHMUD_CV.pdf">Resume</a>
            <a className="f3 link underline dim pv4 pr4" href="https://github.com/thestriver">GitHub</a>
            <a className="f3 link underline dim pv4 pr4" href="https://www.linkedin.com/in/mahmudadeleye/">LinkedIn</a>
          </div>
         
        </div>
        

        <div>
          <h1 className="tc">Projects I've Worked On</h1>
        </div>
        
        <Projects />
        
     
        
       
        <div className="pv2 f4 f2-ns measure center pr3 pl3 justify-center monaco">
          <p>__________________</p>
          <p class="f4">
          I'm always interested in exciting ideas and projects and it would be a pleasure to work with you. <br/> 
          Want to drop by and say hi? 
          <a className="f4 fw6 db dark-blue no-underline underline-hover hover" href="mailto:hi@adeleyemahmud.com"> Send me a mail: hi[at]adeleyemahmud.com</a>
          <a className="f4 fw6 db dark-blue no-underline underline-hover" href="https://linkedin.com/in/mahmudadeleye/"> or find me on LinkedIn.</a>
          </p>
        </div>
        
        
        <footer className="tc mt5 mb2"> 
          <div>
          &copy;{(new Date().getFullYear())} <span>Mahmud Adeleye 🚀 | Made with ❤ </span>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;


