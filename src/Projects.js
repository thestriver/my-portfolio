import React from 'react';
import Cards from './Cards'


function Projects(props) {
	return (
		<div className="tc mb6">
			<Cards
				image="/portfolio_img/mwdigestfullb.png"				
				title="MWD LANDING PAGE"
				description="A landing page built with HTML, CSS and Bootstrap"
			/>
			<Cards
				image="../portfolio_img/agritechfullb.jpg"			
				title="AGTECH VENTURES WEBSITE"
				description="A minimalist landing page built with HTML and CSS"
			/>
			<Cards
				image="../portfolio_img/huddle2b.png"			
				title="HUDDLE LANDING PAGE"
				description="A landing page built with HTML, CSS"
			/>
			<Cards
				image="../portfolio_img/huddlea.png"				
				title="HUDDLE WELCOME PAGE"
				description="A landing page built with HTML, CSS and Javascript"
			/>
			<Cards
				image="../portfolio_img/infochainfulla.jpg"				
				title="INFOCHAIN I.T SOLUTIONS WEBSITE"
				description="A landing page built with HTML, CSS and Bootstrap"
			/>
			<Cards
				image="../portfolio_img/reactfull.png"				
				title="ROBOFRIENDS LANDING PAGE"
				description="A landing page built with HTML, CSS and React JS"
			/>
		</div>


	)
}


export default Projects;