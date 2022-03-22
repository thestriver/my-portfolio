import React from 'react'


function Cards(props) {
    
    return (
        <>
            <div className="flex flex-col bg-gray-900 text-white rounded-lg p-4 m-2">
                    <div className="rounded-lg">
                        <img className="" src={props.image} alt="portfolio" />
                    </div>
                    <div className="flex flex-col items-start mt-4">
                        <h4 className="text-xl font-semibold">{props.title}</h4>
                        <p className="text-sm py-2">
                        {props.description}
                        </p>
                        <a className="pb-2 leading-none rounded-xl font-bold mt-3 underline text-green-600 text-sm" href={props.gitlink}>
                            Link 
                        </a>
                    </div>
            </div>
        </>

        
    )

    

}


export default Cards;

