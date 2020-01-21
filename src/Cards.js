import React from 'react'


function Cards(props) {
    
    return (
        <div className="fl w-50 pa2">		
            <img src={props.image} alt="portfolio-image"/>
            <p>{props.title}</p>
            <p>{props.description}</p>
		</div>

        
    )

    

}


export default Cards;