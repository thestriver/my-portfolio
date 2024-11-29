interface CardProps {
    image: string;
    title: string
    description: string;
    gitlink: string
}

const Cards = ({ image, title, description, gitlink }: CardProps) => {
    return (
        <div className="group h-full flex flex-col bg-gray-900/80 cursor-pointer rounded-lg card-shine-effect overflow-hidden backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:shadow-pink-500/20">
            <div className="relative h-48 md:h-56 xl:h-48 w-full">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            <div className="flex flex-col flex-grow p-4">
                <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors mb-3 line-clamp-1">
                    {title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                    {description}
                </p>
                <a
                    href={gitlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center hover:underline text-sm font-semibold text-emerald-400 hover:text-emerald-300 mt-auto transition-colors"
                >
                    Link
                </a>
            </div>
        </div>
    );

}


export default Cards;

