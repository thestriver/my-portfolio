import React from 'react'


function Cards(props) {
    
    return (
        <div className="fl w-50 grow">		
            <a className="link black-70" href={props.gitlink}>
                <img className="nb4" src={props.image} alt="portfolio-image"/>
                <div className="tc nt2">
                    <p className="f4 b">{props.title}</p>
                    <p className="nt2">{props.description}</p> 
                </div>
            </a>
		</div>

        
    )

    

}


export default Cards;


//tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5

//f4 b nt2