import Container from '@/components/Container';
import StaggeredText from '@/components/StaggeredText';
const About = () => {
	return (
		<section className='relative'>
			<Container>
				<h1 className='max-w-prose text-3xl md:text-4xl tracking-tighter'>
					<StaggeredText
					text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nihil enim hic provident ullam voluptas quod modi vel sint architecto voluptate maiores rerum magnam, recusandae unde necessitatibus mollitia ut accusamus ex illum! Inventore ab neque culpa ratione. Expedita repudiandae fugit doloremque, quasi, placeat iure numquam temporibus sed labore distinctio dolores.'
					el="div"
					/>
				</h1>
			</Container>
		</section>
	);
};

export default About;
