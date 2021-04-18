import React from 'react';

function Intro() {
    return (
        <div className="pv4 f4 f2-ns measure center pr3  justify-center">
          {/* eslint-disable-next-line */}
          <h1 className="fw6 f1 fl w-100 mt0 mb3 sans-serif">Hi! <span role="img"> 👋🏾 </span> It's a pleasure to have you here.</h1>
          <p className="db lh-copy serif fw1 mv0 f4 f3-m f2-l measure-wide monaco">I'm Mahmud Adeleye - a software developer with a passion for creating awesome products that matters.
          </p>

          <div className="pv4 f5">
            <a target="_blank" rel="noopener noreferrer" className="f3 link underline dim pv4 pr4" href="./Mahmud_Adeleye_Resume.pdf">Resume</a>
            <a target="_blank" rel="noopener noreferrer" className="f3 link underline dim pv4 pr4" href="https://github.com/thestriver">GitHub</a>
            <a target="_blank" rel="noopener noreferrer" className="f3 link underline dim pv4 pr4" href="https://www.linkedin.com/in/mahmudadeleye/">LinkedIn</a>
          </div>

        </div>
    )
}


export default Intro;