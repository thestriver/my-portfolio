import React from 'react';
import Cards from './Cards'


const Projects: React.FC = () => { 
	return (
		<div className="tc cf">

		<div className="container flex flex-col  px-4 mx-auto xl:flex-row">
            <div className="flex flex-col mt-2 xl:items-start">
                <h1 className="text-3xl font-bold tracking-tight text-white xl:text-4xl">Deployed Projects </h1> 
                <p className="block lg:max-w-5xl font-normal my-3 text-xl text-gray-200 tracking-wide">
                    Here are some projects I've worked on
                </p>
            </div>   
        </div>

		<div className="container flex flex-col items-center px-2 mx-auto xl:flex-row">
        {/* Resize the preview panel to check the responsiveness*/}                
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-7xl">

			<Cards
				gitlink="https://github.com/thestriver/photo-feed"
				image="https://i.ibb.co/KW7NfLN/amplify-aws.jpg"				
				title="Photo Feed App"
				description="React JS, AWS Amplify Admin UI and Tailwind CSS"
			/>
			
			<Cards 
				gitlink="https://github.com/thestriver/devore-edu-app"
				image="https://i.ibb.co/6Jbby8C/Screen-Shot-2022-03-22-at-18-28-24.png"				
				title="Devore Educational App"
				description="Typescript, React JS, Ethers.js, Headless UI and Tailwind CSS"
			/>
			
			<Cards
				gitlink="https://theguideplatform.com/"
				image="https://i.ibb.co/PwVy4KX/Screen-Shot-2022-03-22-at-18-16-32.png"				
				title="The Guide"
				description="Vue.js, Firebase (Auth, Cloud Firestore and Hosting) and Tailwind CSS"
			/>

			<Cards
				gitlink="https://schoolkit-frontend.vercel.app/"
				image="https://i.ibb.co/pwNmc6F/IMG-5229-1024x683.jpg"				
				title="Donate A School Kit App"
				description="React (Next.js), Solidity    and Tailwind CSS."
			/>

			<Cards
				gitlink="https://github.com/thestriver/stripe-react-app"
				image="https://i.ibb.co/q78nVd3/Clean-Work-Place-Blog-Banner-2.png"				
				title="Stripe Checkout Integration with React"
				description="React, Node, Stripe API and Tailwind CSS"
			/>

			
			<Cards
				gitlink="https://github.com/thestriver/RecieptsOrganizerApp_with_DropBoxAPI"
				image="https://metaschool.s3-ap-southeast-1.amazonaws.com/images/9pypeesiRehOmnAhIvvzJ73CaY9wslyQaFbLftek.png"				
				title="Dropbox Invoice Organizer"
				description="HTML5, CSS, Javascript with DropBox API"
			/>
			
			

			</div>
		</div>			
			
		</div>


	)
}


export default Projects;