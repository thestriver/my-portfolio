export const Articles = () => {
    return (
       <>
            <div className="container flex flex-col items-center px-4 mx-auto xl:flex-row">
                <div className="flex flex-col mt-2 xl:items-start xl:pt-10">
                    <h1 className="text-3xl font-bold tracking-tight text-white xl:text-4xl">Technical Articles 📖</h1> 
                    <p className="block lg:max-w-5xl font-normal my-3 text-xl text-gray-200 tracking-wide">
                        I also love writing technical articles. The best developers are those who are able to document their projects.
                    </p>
                </div>
            
            </div>

            <div className="container flex flex-col items-center px-2 pt-4 pb-12 mx-auto xl:flex-row">
            {/* Resize the preview panel to check the responsiveness*/}                
                <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 xl:space-x-5 xl:max-w-7xl">
                    {/* Tile 1  */}
                    <div className="flex bg-gray-900 text-white rounded-lg py-3">
                        <div className="flex flex-col items-start px-4">
                            <p className="text-md font-semibold">
                                Create a Photo Feed App with React, Tailwind CSS, and AWS Amplify Admin UI
                            </p>
                            <div className="flex  cursor-pointer pt-4 space-x-2 underline">
                            <a className="leading-none rounded font-medium text-green-600 text-sm " href="
                            https://adeleyemahmud.com/2021/06/13/create-and-deploy-a-photo-feed-with-react-tailwind-css-and-aws-amplify/
                            ">Read</a>
                                <svg fill="#006400" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 128 128" width="14px" height="14px"><path d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z"/></svg>			
                            </div>
                        </div>
                    </div>

                    {/* Tile 2  */}
                    <div className="flex bg-gray-900 text-white rounded-lg py-3">
                        <div className="flex flex-col items-start px-4">
                            <p className="text-md font-semibold">A JAMstack Primer: Quick Guide to JAMstack for Absolute Beginners in 2022
                            </p>
                            <div className="flex  cursor-pointer pt-4 space-x-2 underline">
                            <a className="leading-none rounded font-medium text-green-600 text-sm " href="
                            https://adeleyemahmud.com/2021/11/12/a-jamstack-primer-quick-guide-to-jamstack-for-absolute-beginners-in-2022/">Read</a>
                                <svg fill="#006400" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 128 128" width="14px" height="14px"><path d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z"/></svg>			
                            </div>
                        </div>
                    </div>
                    
                    {/* Tile 3  */}
                    <div className="flex bg-gray-900 text-white rounded-lg py-3">
                        <div className="flex flex-col items-start px-4">
                            <p className="text-md font-semibold">Create A Simple React Application with Google Sheets API and Tailwind CSS
                            </p>
                            <div className="flex  cursor-pointer pt-4 space-x-2 underline">
                            <a className="leading-none rounded font-medium text-green-600 text-sm " href="
                            https://adeleyemahmud.com/2021/06/13/create-and-deploy-a-react-application-with-google-sheets-api-and-tailwind-css/">Read</a>
                                <svg fill="#006400" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 128 128" width="14px" height="14px"><path d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z"/></svg>			
                            </div>
                        </div>
                    </div>
                    
                   {/* Tile 4  */}
                   <div className="flex bg-gray-900 text-white rounded-lg py-3">
                        <div className="flex flex-col items-start px-4">
                            <p className="text-md font-semibold">You Do Have Something To Hide – Why You Should Worry About Your Online Privacy
                            </p>
                            <div className="flex  cursor-pointer pt-4 space-x-2 underline">
                            <a className="leading-none rounded font-medium text-green-600 text-sm " href="https://adeleyemahmud.com/2021/06/13/you-do-have-something-to-hide-why-you-should-worry-about-your-online-privacy/">Read</a>
                                <svg fill="#006400" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 128 128" width="14px" height="14px"><path d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z"/></svg>			
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </>
        
    )
}