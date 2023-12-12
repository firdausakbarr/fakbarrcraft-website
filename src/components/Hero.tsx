import { HeroSubTitle, HeroTitle } from '@/lib/constant';
import Container from './Container';
import Reveal from './Reveal';
import StaggeredText from './StaggeredText';
const Hero = () => {
	return (
		<section>
			<Container>
				<h1 className='text-2xl md:text-5xl tracking-[-2px] md:tracking-[-4px] leading-[1] max-w-[23ch]'>
			<StaggeredText
            // once
            text={HeroTitle}
            el="div"
            // className="!max-w-[33ch]"
          />
				</h1>
				<h2 className='text-lg mt-8'>
					<StaggeredText text={HeroSubTitle}
            el="div"
            />
				</h2>
			</Container>
		</section>
	);
};

export default Hero;
