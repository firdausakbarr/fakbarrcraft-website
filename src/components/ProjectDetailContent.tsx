import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { caseStudy1 } from '@/lib/medias';
import Link from 'next/link';
import StaggeredText from './StaggeredText';


type ProjectDetailContentProps = {
	projectName?: string;
	projectDesc?: string;
	year?: string;
	role1?: string;
	role2?: string;
	techStack?: string;
	livePreview?:string;
	sourceCode?:string;
	image1?: StaticImageData;
	image2?: StaticImageData;
	image3?: StaticImageData;
	image4?: StaticImageData;
	image5?: StaticImageData;
	image6?: StaticImageData;
};

const ProjectDetailContent = ({
	projectName = 'Project Name',
	projectDesc = 'some kind of description',
	role1 = 'design',
	role2 = 'development',
	techStack = 'Next js Tailwindcss',
	livePreview = 'live preview',
	sourceCode = 'github',
	year = '2022',
	image1 = caseStudy1,
	image2 = caseStudy1,
	image3 = caseStudy1,
	image4 = caseStudy1,
	image5 = caseStudy1,
	image6 = caseStudy1,
}: ProjectDetailContentProps) => {
	return (
		<div>
			<h1 className='text-4xl max-w-6xl flex flex-col gap-2'>
			<StaggeredText text={projectName}
            el="div"
			className='text-4xl max-w-6xl '
            />
			<StaggeredText text={projectDesc}
            el="div"
			className='text-2xl'
            />
			</h1>
			<div className='space-y-6 text-lg max-w-2xl mt-4'>
				
				<p>
					This case study highlights the process of designing and developing a new model of mechanical keyboard. The mechanical keyboard company is renowned for its production of innovative and high-quality keyboard designs. The objective
					was to create a keyboard that seamlessly merges aesthetics, ergonomic design, and advanced features. This goal was achieved by utilizing a combination of premium materials, customizable key switches, and intuitive software for
					easy configuration.
				</p>
				<p>The project commenced with thorough user research to gain insights into typing preferences and hand positioning, which guided an iterative design process resulting in an elegant and comfortable layout.</p>
				<p>
					Collaboration with engineers was pivotal in implementing unique switch mechanisms, customizable firmware, and flawless connectivity. The successful launch of the new mechanical keyboard model garnered positive acclaim for its
					performance and design attributes.
				</p>
			</div>
			<div className='space-y-4 mt-12 max-w-2xl cursor-pointer'>
				<div className='flex flex-col md:flex-row justify-between'>
					<p className=' font-semibold uppercase'>Year</p>
					<p className=' font-normal'>{year}</p>
				</div>
				<div className='flex flex-col md:flex-row justify-between'>
					<p className=' font-semibold uppercase'>tech stack</p>
					<p className=' font-normal'>{techStack}</p>
				</div>
				<div className='flex flex-col md:flex-row justify-between'>
					<p className=' font-semibold uppercase'>Role</p>
					<p className=' font-normal capitalize'>
						{role1} &amp; {role2}
					</p>
				</div>
				<div className='flex flex-col md:flex-row justify-between'>
					<p className=' font-semibold uppercase'>source code</p>
					<Link href='#' className=' font-normal capitalize'>
						{sourceCode}
					</Link>
				</div>
				<div className='flex flex-col md:flex-row justify-between'>
					<p className=' font-semibold uppercase'>live preview</p>
					<Link href='#' className=' font-normal capitalize'>
						{livePreview}
					</Link>
				</div>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mt-12'>
				<Image className='w-full object-cover col-span-full' src={image1} alt='#' />
				<Image className='w-full object-cover aspect-[4/4]' src={image2} alt='#' />
				<Image className='w-full object-cover aspect-[4/4]' src={image3} alt='#' />
				<Image className='w-full object-cover aspect-[4/4]' src={image4} alt='#' />
				<Image className='w-full object-cover aspect-[4/4]' src={image5} alt='#' />
				<Image className='w-full object-cover col-span-full aspect-[4/4]' src={image6} alt='#' />
			</div>
		</div>
	);
};

export default ProjectDetailContent;
