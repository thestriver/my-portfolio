import React from 'react';
import Cards from './Cards'


function Projects(props) {
	return (
		<div className="tc cf">

		<div className="container flex flex-col  px-4 mx-auto xl:flex-row">
            <div className="flex flex-col mt-2 xl:items-start">
                <h1 className="text-3xl font-bold tracking-tight text-white xl:text-4xl">Deployed Projects 🚀</h1> 
                <p className="block lg:max-w-5xl font-normal my-3 text-xl text-gray-200 tracking-wide">
                    Here are some projects I've worked on
                </p>
            </div>   
        </div>

		<div className="container flex flex-col items-center px-2 mx-auto xl:flex-row">
        {/* Resize the preview panel to check the responsiveness*/}                
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-7xl">

			<Cards
				gitlink="https://theguideplatform.com/"
				image="https://metaschool.s3-ap-southeast-1.amazonaws.com/images/9pypeesiRehOmnAhIvvzJ73CaY9wslyQaFbLftek.png"				
				title="The Guide - Fullstack App"
				description="HTML5, Tailwind CSS, Vue.js and Firebase"
			/>

			<Cards
				gitlink="https://github.com/thestriver/robofriends"
				image="https://metaschool.s3-ap-southeast-1.amazonaws.com/images/9pypeesiRehOmnAhIvvzJ73CaY9wslyQaFbLftek.png"				
				title="Donate A School Kit dApp"
				description="React (Next.js), Solidity and Tailwind CSS."
			/>
			<Cards
				gitlink=""
				image="https://metaschool.s3-ap-southeast-1.amazonaws.com/images/9pypeesiRehOmnAhIvvzJ73CaY9wslyQaFbLftek.png"				
				title="Admin Dashboard for NGOs"
				description="HTML5, Tailwind CSS, React.js, Node.js and MongoDB"
			/>

			<Cards
				gitlink="https://github.com/thestriver/RecieptsOrganizerApp_with_DropBoxAPI"
				image="https://metaschool.s3-ap-southeast-1.amazonaws.com/images/9pypeesiRehOmnAhIvvzJ73CaY9wslyQaFbLftek.png"				
				title="Dropbox Invoice Organizer"
				description="HTML5, CSS, Javascript with DropBox API"
			/>
			<Cards
				gitlink="https://www.devoreapp.com/"
				image="https://metaschool.s3-ap-southeast-1.amazonaws.com/images/9pypeesiRehOmnAhIvvzJ73CaY9wslyQaFbLftek.png"				
				title="Devore Educational App"
				description="HTML5 and Tailwind CSS"
			/>
			
			<Cards
				gitlink="http://tdm-new.surge.sh/"
				image="https://metaschool.s3-ap-southeast-1.amazonaws.com/images/9pypeesiRehOmnAhIvvzJ73CaY9wslyQaFbLftek.png"				
				title="TDM Landing Page"
				description="HTML5 and Tailwind CSS"
			/>
			
			<Cards
				gitlink="https://github.com/thestriver/frontendprojects/tree/master/Landing_page_with_introduction"
				image="https://i.ibb.co/yNYJM7Z/Screen-Shot-2022-03-21-at-22-13-15.png"				
				title="Huddle Social PAGE"
				description="HTML5, CSS3, and Javascript"
			/>
			
			

			</div>
		</div>			
			
		</div>


	)
}


export default Projects;