import React from 'react';
import Cards from './Cards'

const projects = [
	{
		gitlink: "https://www.idunu.org/",
		image: "https://www.idunu.org/assets/images/logo2.png",
		title: "IDUNU",
		description: "Award-winning full-stack fundraising and fund distribution solutions for high-impact, cost-effective charities, and NGOs. Built with Next.js, Tailwind CSS, PostgreSQL, Finetuned LLMs and Agents."
	},
	{
		gitlink: "https://ml-visualization.vercel.app/",
		image: "https://github.com/thestriver/ml-visualization/raw/main/public/screenshot.png",
		title: "Interactive ML Visualizations",
		description: "Interactive ML visualization showcase using D3.js, visx, and WebGL/Three.js. Features loss curves, confusion matrices, feature importance, and 3D predictions - built with Next.js, TypeScript, and Tailwind CSS."
	},
	{
		gitlink: "https://github.com/thestriver/ai-ocr-playground",
		image: "https://github.com/thestriver/ai-ocr-playground/raw/main/public/home.png",
		title: "AI OCR Playground",
		description: "Compare state-of-the-art OCR models across Mistral, OpenAI, Google, and Anthropic models in real-time. Built with Next.js, TypeScript and Tailwind CSS."
	},
	{
		gitlink: "https://www.speechbuddyai.com/",
		image: "https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f399.svg",
		title: "Speech Buddy AI",
		description: "Speech Buddy AI is an AI-powered platform that helps you improve your speech and communication skills. Built with Next.js, Tailwind CSS, PostgreSQL, Finetuned LLMs and Agents."
	},
	{
		gitlink: "https://ultimateaimac.app",
		image: "https://www.ultimateaimac.app/_next/image?url=%2Fassets%2Fimages%2Fchat.png&w=1920&q=75",
		title: "Ultimate AI Mac",
		description: "Native Mac application for AI workflows. Local LLM processing with privacy focus. Built with Swift and SwiftUI"
	},
	{
		gitlink: "https://igiwe.com",
		image: "https://www.ultimateaimac.app/_next/image?url=%2Fassets%2Fimages%2Fshield.png&w=1920&q=75",
		title: "Igiwe AI Platform",
		description: "All-in-one AI platform with a built-in PII safeguard. Built with Next.js, TypeScript, Finetuned LLMS and Agents."
	},
	{
		gitlink: "https://visualai.vercel.app",
		image: "https://www.ultimateaimac.app/_next/image?url=%2Fassets%2Fimages%2Faimodel.png&w=1920&q=75",
		title: "Visual LLM Chat",
		description: "Visual AI chat with RAG (Retrieval Augmented Generation) integration. Enhanced context understanding through vector retrieval."
	},
	{
		gitlink: "https://voicesupport.vercel.app",
		image: "https://www.ultimateaimac.app/_next/image?url=%2Fassets%2Fimages%2Faivoice.png&w=1920&q=75",
		title: "Voice Support AI",
		description: "Fullstack voice-based app for customer-facing teams. Features AI transcription and semantic search. Built with Next.js and multimodal LLMS."
	},
	// {
	// 	gitlink: "https://pvcommunity-bot.vercel.app/",
	// 	image: "https://i.ibb.co/f9CnDPS/Screenshot-2023-04-14-at-2-12-03-PM.png",
	// 	title: "Community AI Bot app",
	// 	description: "Next.js, Typescript, Python, PostgreSQL, Vercel Edge Functions and OpenAI API"
	// },
	// {
	// 	gitlink: "https://www.studybaseapp.com/",
	// 	image: "https://cdn.pixabay.com/photo/2023/04/03/01/23/tree-7895726_960_720.jpg",
	// 	title: "StudyBase",
	// 	description: "Typescript, Next.js, Tailwind CSS, PosgreSQL (Fullstack App)"
	// },
	{
		gitlink: "https://github.com/thestriver/fastapi-azurecognitive",
		image: "https://metaschool.s3-ap-southeast-1.amazonaws.com/images/9pypeesiRehOmnAhIvvzJ73CaY9wslyQaFbLftek.png",
		title: "Azure Cognitive Service API",
		description: "Sentiment, Language Detection and Key Phrase extraction analysis"
	},
	{
		gitlink: "https://azeroretro-project.vercel.app/",
		image: "https://www.lamhi.studio/retrozero.png",
		title: "RetroZero",
		description: "RetroZero is bringing back arcade game memories."
	},
	{
		gitlink: "https://github.com/thestriver/photo-feed",
		image: "https://i.ibb.co/KW7NfLN/amplify-aws.jpg",
		title: "Photo Feed App",
		description: "React JS, AWS Amplify and Tailwind CSS"
	},
	// {
	// 	gitlink: "https://github.com/thestriver/devore-edu-app",
	// 	image: "https://i.ibb.co/6Jbby8C/Screen-Shot-2022-03-22-at-18-28-24.png",
	// 	title: "Devore Educational App",
	// 	description: "Typescript, React JS, Headless UI and Tailwind CSS"
	// },
	{
		gitlink: "https://theguideplatform.com/",
		image: "https://i.ibb.co/PwVy4KX/Screen-Shot-2022-03-22-at-18-16-32.png",
		title: "The Guide",
		description: "Vue.js, Firebase (Auth, Cloud Firestore and Hosting) and Tailwind CSS"
	},
	// {
	// 	gitlink: "https://schoolkit-frontend.vercel.app/",
	// 	image: "https://i.ibb.co/pwNmc6F/IMG-5229-1024x683.jpg",
	// 	title: "Donate A School Kit App",
	// 	description: "React (Next.js), and Tailwind CSS."
	// },
	{
		gitlink: "https://github.com/thestriver/stripe-react-app",
		image: "https://i.ibb.co/q78nVd3/Clean-Work-Place-Blog-Banner-2.png",
		title: "Stripe Checkout Integration with React",
		description: "React, Node, Stripe API and Tailwind CSS"
	}
];

const Projects: React.FC = () => {
	return (
		<div className="tc cf">

			<div className="container flex flex-col  px-4 mx-auto xl:flex-row">
				<div className="flex flex-col mt-2 xl:items-start">
					{/* <h1 className="text-3xl font-bold tracking-tight text-white xl:text-4xl">Deployed Projects </h1>  */}
					<span className="relative whitespace-nowrap font-semibold text-2xl text-gray-900">
						{/* <svg aria-hidden="true" viewBox="0 0 418 42" className="animate-ping absolute top-2/3 left-0 h-[0.58em] w-full fill-green-500/60" 
					preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
					</svg> */}
						<span className="relative text-3xl font-bold tracking-tight text-white xl:text-4xl">Deployed Projects</span>
					</span>
					<p className="block lg:max-w-5xl font-normal my-3 text-xl text-gray-200 tracking-wide">
						Here are some personal projects I've worked on
					</p>

				</div>
			</div>

			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl">
					{projects?.map((project, index) => (
						<Cards key={index} {...project} />
					))}
				</div>
			</div>

		</div>


	)
}


export default Projects;