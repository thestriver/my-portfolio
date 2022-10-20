interface CardProps {
    image: string;
    title: string
    description: string;
    gitlink: string
}

const Cards = ({image, title, description, gitlink}: CardProps) => { 
    
    return (
        <>
            <div className="flex flex-col bg-gray-900 text-white rounded-lg p-4 m-2">
                    <div className="rounded-lg">
                        <img className="max-h-md" src={image} alt="portfolio"  />
                    </div>
                    <div className="flex flex-col items-start mt-4">
                        <h4 className="text-xl font-semibold">{title}</h4>
                        <p className="text-sm py-2">
                        {description}
                        </p>
                        <a className="pb-2 leading-none rounded-xl font-bold mt-3 underline text-green-600 text-sm" href={gitlink}>
                            Link 
                        </a>
                    </div>
            </div>
        </>

        
    )

    

}


export default Cards;

