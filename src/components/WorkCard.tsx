import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import StaggeredText from './StaggeredText';

type WorkCardProps = {
	projectName: string;
	role1: string;
	role2: string;
	href: string;
	image: StaticImageData;
};

const WorkCard = ({ projectName = 'project name', role1 = 'design', role2 = 'development', href, image }: WorkCardProps) => {
	return (
		<Link href={href}>
			<div className='relative h-96 rounded-lg group overflow-hidden capitalize'>
				<StaggeredText
					el='div'
					// once
					text={projectName}
					className='absolute top-5 left-5 text-2xl tracking-[-2px] md:tracking-[-3px] z-10'
				/>
				<Image priority className='h-full w-full object-cover brightness-95 transition duration-300 group-hover:scale-105' src={image} alt={projectName} fill sizes='auto' />
				<div className='flex gap-4 absolute bottom-5 left-5'>
					<span className='text-sm rounded-full capitalize border border-fakbarrwhite px-6 py-1 backdrop-blur-sm'>{role1}</span>
					<span className='text-sm rounded-full capitalize border border-fakbarrwhite px-6 py-1 backdrop-blur-sm'>{role2}</span>
				</div>
			</div>
		</Link>
	);
};

export default WorkCard;
