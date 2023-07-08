import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	cSharp,
	nodejs,
	springboot,
	docker,
	defesacivil,
	fatec,
	studyhub,
	habits,
	spotify,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Web Developer',
		icon: web,
	},
	{
		title: 'React Native Developer',
		icon: mobile,
	},
	{
		title: 'Backend Developer',
		icon: backend,
	},
	{
		title: 'Desktop Developer',
		icon: creator,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'React Native',
		icon: reactjs,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'Spring Boot',
		icon: springboot,
	},
	{
		name: 'C#',
		icon: cSharp,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'docker',
		icon: docker,
	},
];

const experiences = [
	{
		title: 'Frontend Developer',
		company_name: 'Defesa Civil',
		icon: defesacivil,
		iconBg: '#E6DEDD',
		date: 'Fev 2023 - Recent',
		points: [
			'My final project for Etec in partnership with Civil Defense and the City Hall of my town.',
			'The project consisted of 1 web system, 2 mobile systems, and 2 embedded systems with Arduinos.',
			'I was responsible for all the frontend part of the web application and its design.',
			'I was also responsible for the frontend of the two mobile applications and their design.',
		],
	},
	{
		title: 'Frontend Developer',
		company_name: 'Fatec',
		icon: fatec,
		iconBg: '#E6DEDD',
		date: 'Jun 2023 - Aug 2023',
		points: [
			'Volunteer project with a friend for my university.',
			'The project consisted of 1 web system and 1 mobile system.',
			'I was responsible for the frontend of both the web system and the mobile system, as well as their design.',
		],
	},
];

const projects = [
	{
		name: 'StudyHub',
		description:
			'A complete platform with web and mobile systems for Fatec students and professors to schedule study group meetings.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'react-native',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: studyhub,
		source_code_link: 'https://github.com/cleitinsz/GrupoDeEstudos',
	},
	{
		name: 'Habits',
		description:
			'A complete application with web, mobile, and server systems for users to create tasks they still need to accomplish and establish habits.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'react-native',
				color: 'green-text-gradient',
			},
			{
				name: 'node',
				color: 'pink-text-gradient',
			},
		],
		image: habits,
		source_code_link: 'https://github.com/cleitinsz/Habits',
	},
	{
		name: 'Lyriks',
		description:
			'A frontend application for users to enjoy listening to their favorite music and stay updated with their favorite artists for free.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'green-text-gradient',
			},
			{
				name: 'rapidapi',
				color: 'pink-text-gradient',
			},
		],
		image: spotify,
		source_code_link: 'https://github.com/cleitinsz/Spotify-Clone',
	},
];

export { services, technologies, experiences, projects };
