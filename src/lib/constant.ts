import { caseStudy1, caseStudy2, caseStudy3, caseStudy4, workThumbnail1, workThumbnail2, workThumbnail3, workThumbnail4,fakbarrWebsite } from './medias';

export const NavLinks = [
	{
		href: '/',
		title: 'Home',
	},
	{
		href: '/about',
		title: 'About',
	},
	{
		href: '/',
		title: 'Works',
	},
	{
		href: '/contact',
		title: 'Contact',
	},
] as const;

export const HeroTitle: string[] = [
'Independent creative personality,',
'Fall in deep love into design',
'driven by passion and obsession.'
];

export const HeroSubTitle: string[] = [
	'Latest insight: Kill off the average™: Unleashing brand potential'
];

export const FrontendProjects = [
	{
		href: '/fakbarr-project',
		title: 'FakbarCraft',
		image: fakbarrWebsite,
	},
	{
		href: '/fakbarr-project',
		title: 'FakbarCraft',
		image: caseStudy1,
	},
	{
		href: '/fakbarr-project',
		title: 'FakbarCraft',
		image: caseStudy2,
	},
	{
		href: '/fakbarr-project',
		title: 'FakbarCraft',
		image: caseStudy3,
	},
	{
		href: '/fakbarr-project',
		title: 'FakbarCraft',
		image: caseStudy4,
	},
	{
		href: '/fakbarr-project',
		title: 'FakbarCraft',
		image: workThumbnail1,
	},
	{
		href: '/fakbarr-project',
		title: 'FakbarCraft',
		image: workThumbnail2,
	},
	{
		href: '/fakbarr-project',
		title: 'FakbarCraft',
		image: workThumbnail3,
	},
	{
		href: '/fakbarr-project',
		title: 'FakbarCraft',
		image: workThumbnail4,
	},
] as const;
