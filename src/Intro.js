import React from 'react';

function Intro() {
    return (
        <div className="pv5 f4 f2-ns measure center pr3 pl3 justify-center">
          <h1 className="fw6 f1 fl w-100 black mt0 mb3 sans-serif">Hi! <span role="img"> 👋</span> It's a pleasure to have you here.</h1>
          <p className="db lh-copy black serif fw1 mv0 f4 f3-m f2-l measure-wide monaco">I'm Mahmud Adeleye - a UK based 
          software developer currently in a MSc. Computing Science program. Looking for opportunities to create awesome stuff 
          that matter. 
          </p>

          <div className="pv4 f5">
            <a className="f3 link underline dim pv4 pr4" href="./portfolio_img/Mahmud_Adeleye_CV_2020.pdf">Resume</a>
            <a className="f3 link underline dim pv4 pr4" href="https://github.com/thestriver">GitHub</a>
            <a className="f3 link underline dim pv4 pr4" href="https://www.linkedin.com/in/mahmudadeleye/">LinkedIn</a>
          </div>
         
        </div>
    )
}


export default Intro;