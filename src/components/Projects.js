import React from 'react';
import Cards from './Cards'


function Projects(props) {
	return (
		<div className="tc cf">

			<div>
          		<h1 className="tc">Some Projects I've Worked On</h1>
        	</div>

			<Cards
				gitlink="https://theguideplatform.com/"
				image="./portfolio_img/theguide.png"				
				title="The Guide - Fullstack App"
				description="HTML5, Tailwind CSS, Vue.js and Firebase"
			/>

			<Cards
				gitlink=""
				image="./portfolio_img/ngo.png"				
				title="Admin Dashboard for NGOs"
				description="HTML5, Tailwind CSS, React.js, Node.js and MongoDB"
			/>

			<Cards
				gitlink="https://github.com/thestriver/RecieptsOrganizerApp_with_DropBoxAPI"
				image="./portfolio_img/invoice-dropbox1.png"				
				title="Dropbox Invoice Organizer"
				description="HTML5, CSS, Javascript with DropBox API"
			/>

			<Cards
				gitlink="https://github.com/thestriver/robofriends"
				image="./portfolio_img/robo.png"				
				title="ROBOFRIENDS LANDING PAGE"
				description="HTML5, CSS, React JS and API"
			/>

			<Cards
				gitlink="http://new-tdm-site.surge.sh/"
				image="./portfolio_img/tdm.png"				
				title="TDM Landing Page"
				description="HTML5, Tailwind CSS, Javascript"
			/>
			
			<Cards
				gitlink="http://new-tdm-site.surge.sh/"
				image="./portfolio_img/giftkit.png"				
				title="Gift A School Kit"
				description="HTML5, Tailwind CSS, Vue.js"
			/>

			<Cards
				gitlink="https://github.com/thestriver/frontendprojects/tree/master/Landing_page_with_introduction"
				image="./portfolio_img/huddle.png"				
				title="HUDDLE WELCOME PAGE"
				description="HTML5, CSS3, and Javascript"
			/>

			
		
			
			
		</div>


	)
}


export default Projects;