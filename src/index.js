import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import dark from './portfolio_img/dark-mode.svg'
import light from './portfolio_img/day-sunny.svg'

function Room() {
    const [isLit, setLit] = useState(true);
    const brightness = isLit ? "lit" : "dark" ;
    const textmode = isLit ? <img className="w2 h2" src={dark} alt="darkmode"/> : <img className="w1 mt1 h1" src={light} alt="darkmode"/> ;
  
    return (
      <div className={`room ${brightness}`}>
        <button className="ml3 mt2" style={{cursor: 'pointer'}}  onClick={() => setLit(!isLit)}>{textmode}</button>
        <App />  
      </div>
      
    );
}

ReactDOM.render(
    <Room />,
    // <App />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
