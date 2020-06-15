import React, { useState } from 'react';
import './index.css';


function Darkmode() {
    const [isLit, setLit] = useState(true);
    const brightness = isLit ? "lit" : "dark" ;
  
    return (
      <div className={`room ${brightness}`}>
        <button onClick={() => setLit(!isLit)}>Dark Mode</button>
      </div>
    );
  }










export default Darkmode;