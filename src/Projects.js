import React from 'react';
import Cards from './Cards'


function Projects(props) {
	return (
		<div className="tc cf">

			<Cards
				gitlink="https://github.com/thestriver/frontendprojects/tree/master/Landing_page_with_introduction"
				image="./portfolio_img/huddlea.png"				
				title="HUDDLE WELCOME PAGE"
				description="HTML5, CSS3, and Javascript"
			/>

			<Cards
				gitlink="https://github.com/thestriver/robofriends"
				image="./portfolio_img/reactfull.png"				
				title="ROBOFRIENDS LANDING PAGE"
				description="HTML, CSS, React JS and API"
			/>
			<Cards
				gitlink="https://github.com/thestriver/frontendprojects/tree/master/huddle_landing-page-with-alternating-feature-blocks"
				image="./portfolio_img/huddle2b.png"			
				title="HUDDLE LANDING PAGE"
				description="HTML and CSS"
			/>
			

			<Cards
				gitlink="https://muslimsweekenddigest.com"
				image="./portfolio_img/mwdigestfullb.png"				
				title="MWD LANDING PAGE"
				description="HTML and CSS(Bootstrap)"
			/>
			<Cards
				gitlink="https://github.com/thestriver/AgTech-Ventures"
				image="./portfolio_img/agritechfullb.jpg"			
				title="AGTECH VENTURES WEBSITE"
				description="HTML and CSS(Bootstrap)"
			/>
			
			<Cards
				gitlink="https://infochainng.com"
				image="./portfolio_img/infochainfulla.jpg"				
				title="INFOCHAIN I.T SOLUTIONS"
				description="HTML and CSS(Bootstrap)"
			/>
			
			
		</div>


	)
}


export default Projects;