import Container from './Container';
import StaggeredText from './StaggeredText';
const Footer = () => {
	return (
		<footer className='sticky bottom-0 z-50 backdrop-blur-md text-xs'>
			<Container className='flex justify-between px-2 py-2 font-medium capitalize tracking-[-2px]'>
				<StaggeredText
            once
            text='&copy; fakbarcraft 2023'
            el="div"
          />
			</Container>
		</footer>
	);
}

export default Footer
