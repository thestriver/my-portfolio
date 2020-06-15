import React from 'react'


function Cards(props) {
    
    return (
        <div className="fl w-100 w-100-m w-40-l grow ml5-l">		
            <a className="link black-70" href={props.gitlink}>
                <img className="nb4" src={props.image} alt="portfolio"/>
                <div className="tc nt2">
                    <p className="f4 b">{props.title}</p>
                    <p className="nt2">{props.description}</p> 
                </div>
            </a>
		</div>

        
    )

    

}


export default Cards;

