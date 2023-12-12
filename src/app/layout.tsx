import './globals.css';
import localFont from 'next/font/local';
import Footer from '@/components/Footer';
import BgWrapper from '@/components/BgWrapper';
import { ReactLenis } from '@/components/ReactLenisComponent';
import Navbar from '@/components/Nav';
import { Metadata } from 'next';

export const metadata:Metadata = {
	title: 'FakbarrCraft | Obsessed With Design',
	description: 'Independent creative personality,Fall in deep love into design driven by passion and obsession. ',
	creator: 'FakbarrCraft',
};

const inter = localFont({
	src: '../assets/fonts/Inter[slnt,wght].ttf',
	variable: '--font-inter',
});

const RootLayout = ({ children }: {children: React.ReactNode}) => {
	return (
		<html lang='en'>
			<body className={`relative text-white tracking-[-1px] antialiased ${inter.className}`}>
				<ReactLenis
					root
					options={{
						syncTouch: true,
						smoothWheel: true,
						smoothTouch: true,
						touchMultiplier: 2,
						wheelMultiplier: 20,
					}}
				>
					<BgWrapper/>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</ReactLenis>
			</body>
		</html>
	);
};

export default RootLayout;
