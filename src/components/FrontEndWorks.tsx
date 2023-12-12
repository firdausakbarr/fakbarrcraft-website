import React from 'react';
import { FrontendProjects } from '@/lib/constant';
import Container from './Container';
import WorkCard from './WorkCard';

const FrontEndWorks = () => {
	return (
		<section>
			<Container className='gap-4 grid grid-cols-1 md:grid-cols-2'>
				{FrontendProjects.map((FrontendProject, index) => (
						<WorkCard key={index} image={FrontendProject.image} projectName={FrontendProject.title} role1='web design' role2='development' href={FrontendProject.href} />
				))}
			</Container>
		</section>
	);
}

export default FrontEndWorks
