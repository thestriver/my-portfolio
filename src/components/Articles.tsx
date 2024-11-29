import { ArticleCard as Card } from './ArticleCard'

const Articles = () => {
    return (
        <>
            <div className="container flex flex-col items-center px-4 mx-auto xl:flex-row">
                <div className="flex flex-col mt-5 xl:items-start xl:pt-10">
                    {/* <h1 className="text-3xl font-bold tracking-tight text-white xl:text-4xl">Technical Articles 📖</h1>  */}
                    <span className="relative whitespace-nowrap font-semibold text-2xl text-gray-900">
                        {/* <svg aria-hidden="true" viewBox="0 0 418 42" className=" animate-ping absolute top-2/3 left-0 h-[0.58em] w-full fill-green-500/60"
                            preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                        </svg> */}
                        <span className="relative text-3xl font-bold tracking-tight text-white xl:text-4xl">Technical Articles/ Modules 📖</span>
                    </span>
                    <p className="block lg:max-w-5xl font-normal my-3 text-xl text-gray-200 tracking-wide">
                        I also love writing technical articles. The best developers are those who are able to document their projects.
                    </p>
                </div>
            </div>

            <div className="container flex flex-col items-center px-2 pt-4 pb-12 mx-auto xl:flex-row">
                {/* Resize the preview panel to check the responsiveness*/}
                <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 xl:max-w-7xl">
                    <Card title={'Practical AI Application Development for Javascript Developers - Full-stack Course'}
                        link={'https://github.com/thestriver/ai-for-javascript-course'}
                    />
                    <Card title={'Optimizing LLMs: Tools and Techniques for Peak Performance Testing'}
                        link={'https://semaphoreci.com/blog/llms-performance-testing'}
                    />
                    <Card title={'A Comprehensive Frontend Developer Guide to Building AI apps in 2023'}
                        link={'https://frontendcode.hashnode.dev/a-comprehensive-front-end-developer-guide-to-building-ai-apps-in-2023'}
                    />
                    <Card title={'Create a Photo Feed App with React, Tailwind CSS, and AWS Amplify Admin UI'}
                        link={'https://adeleyemahmud.com/2021/06/13/create-and-deploy-a-photo-feed-with-react-tailwind-css-and-aws-amplify/'}
                    />
                    <Card title={'PDF Processing with Gemini: From Documents to Structured Data'}
                        link={'https://www.aidevmode.com/blog/gemini-pdf-processing'}
                    />
                    <Card title={'A JAMstack Primer: Quick Guide to JAMstack for Absolute Beginners in 2022'}
                        link={'https://adeleyemahmud.com/2021/11/12/a-jamstack-primer-quick-guide-to-jamstack-for-absolute-beginners-in-2022/'}
                    />
                    {/* <Card title={'Create A Simple React Application with Google Sheets API and Tailwind CSS'}
                        link={'https://adeleyemahmud.com/2021/06/13/create-and-deploy-a-react-application-with-google-sheets-api-and-tailwind-css/'}
                    /> */}
                    <Card title={'A Guide to Vector Embeddings for Product and Software Engineers'}
                        link={'https://dzone.com/articles/a-guide-to-vector-embeddings-for-product-and-softw'}
                    />
                    {/* <Card title={'You Do Have Something To Hide – Why You Should Worry About Your Online Privacy'} 
                        link={'https://adeleyemahmud.com/2021/06/13/you-do-have-something-to-hide-why-you-should-worry-about-your-online-privacy/'}
                    /> */}
                </div>
            </div>
        </>

    )
}

export default Articles