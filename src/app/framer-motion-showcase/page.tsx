import { BlurIn, FadeDown, FadeUp, GradualSpacing, MultiDirectionSlide, RippleWordPullUp, RotateText, SeparateAway, SlightFlip, StaggeredLetterFadeIn, StaggeredLetterPullUp, TypingEffect, WavyText } from '@/components/AnimatedWithFramerMotion';
import Container from '@/components/Container';

const FramerMotionShowcase = () => {
	return (
		<section>
			<Container>
            <StaggeredLetterFadeIn sentence='fakbarr craft is dope'/>
            <FadeDown/>
            <FadeUp/>
            <MultiDirectionSlide/>
            <StaggeredLetterPullUp words='fakbarr craft is dope'/>
            <RippleWordPullUp words='fakbarr craft is dope'/>
            <WavyText word='fakbarr craft is dope'/>
            <RotateText/>
            <TypingEffect text='fakbarr craft is dope'/>
            <SeparateAway/>
            <GradualSpacing text='fakbarr craft is dope'/>
            <BlurIn>
                <p>fakbarr craft is dope</p>
            </BlurIn>
            <SlightFlip/>
			</Container>
		</section>
	);
};

export default FramerMotionShowcase;
