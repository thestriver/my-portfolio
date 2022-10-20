import { ArticleCard as Card} from './ArticleCard'

const Articles = () => {
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
                    <Card title={'Create a Photo Feed App with React, Tailwind CSS, and AWS Amplify Admin UI'} 
                        link={'https://adeleyemahmud.com/2021/06/13/create-and-deploy-a-photo-feed-with-react-tailwind-css-and-aws-amplify/'}
                    />
                    <Card title={'A JAMstack Primer: Quick Guide to JAMstack for Absolute Beginners in 2022'} 
                        link={'https://adeleyemahmud.com/2021/11/12/a-jamstack-primer-quick-guide-to-jamstack-for-absolute-beginners-in-2022/'}
                    />
                     <Card title={'Create A Simple React Application with Google Sheets API and Tailwind CSS'} 
                        link={'https://adeleyemahmud.com/2021/06/13/create-and-deploy-a-react-application-with-google-sheets-api-and-tailwind-css/'}
                    />
                    <Card title={'You Do Have Something To Hide – Why You Should Worry About Your Online Privacy'} 
                        link={'https://adeleyemahmud.com/2021/06/13/you-do-have-something-to-hide-why-you-should-worry-about-your-online-privacy/'}
                    />
                </div>
            </div>
       </>
        
    )
}

export default Articles