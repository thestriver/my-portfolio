import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';

function Room() {
    const [isLit, setLit] = useState(true);
    const brightness = isLit ? "lit" : "dark" ;
  
    return (
      <div className={`room ${brightness}`}>
        <button onClick={() => setLit(!isLit)}>Dark Mode</button>
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
