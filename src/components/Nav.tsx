'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import StaggeredText from './StaggeredText';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import Container from './Container';
import Reveal from './Reveal';
import FakbarrCraftLogo from './FakbarrCraftLogo';
import OpenMenuIcon from './CloseMenuIcon';
import CloseMenuIcon from './OpenMenuIcon';

const Nav = () => {

	const navLinks = [
		{ href : '/', name: 'Home'},
		{ href : '/about', name: 'About'},
		{ href : '/works', name: 'Works'},
		{ href : '/contact', name: 'Contact'},
	];
	
	const navLinksType = typeof navLinks;

	const itemVariants = {
		closed: {
			opacity: 0,
		},
		open: { opacity: 1 },
	};

	const sideVariants = {
		closed: {
			transition: {
				duration: 1,
				staggerChildren: 0.2,
				staggerDirection: -1,
			},
		},
		open: {
			transition: {
				duration: 1,
				staggerChildren: 0.2,
				staggerDirection: 1,
			},
		},
	};

	const [open, cycleOpen] = useCycle(false, true);
	const [openMobileNav, setOpenMobileNav] = useState(false);
	const handleClick = () => {
		cycleOpen();
		setOpenMobileNav(!openMobileNav);
		document.documentElement.classList.add('overflow-hidden')
	};

	return (
		<>
			{/* DEKSTOP NAV */}
			<nav className='sticky top-0 z-50 backdrop-blur-md'>
				<Container className='flex justify-between items-center border-b border-black'>
					<ul>
						<li>
							<Link href='/'>
								<Reveal>
									{/* <Image src={collageLogo} priority={true} alt='logo' width={100} height={100} className='w-28' /> */}
									<FakbarrCraftLogo className='fill-fakbarrwhite w-16 h-16' />
								</Reveal>
							</Link>
						</li>
					</ul>
					<ul className='hidden md:flex items-center gap-4 text-xl'>
						{navLinks.map((navLink, index) => (
							<li key={index}>
								<Link href={navLink.href}>
									<StaggeredText
										once
										text={navLink.name}
										el='div'
									/>
								</Link>
							</li>
						))}
					</ul>
					<button className='cursor-pointer md:hidden grid items-center text-2xl text-center' onClick={handleClick}>
						<Reveal>{openMobileNav ? <OpenMenuIcon /> : <CloseMenuIcon />}</Reveal>
					</button>
				</Container>
			</nav>
			{/* MOBILE NAV */}
			<div className='relative'>
				<AnimatePresence>
					{open && (
						<motion.div
							className='w-screen h-screen fixed md:hidden flex flex-col items-center justify-center top-0 z-[49] space-x-8 text-6xl md:text-7xl bg-fakbarrblack'
							initial={{ width: 0 }}
							animate={{
								width: '100vw',
							}}
							exit={{
								width: 0,
								transition: { delay: 0.7, duration: 1, ease: 'easeInOut' },
							}}
						>
							<motion.ul className='flex flex-col gap-2' initial='closed' animate='open' exit='closed' variants={sideVariants}>
								{navLinks.map((navLink, index) => (
									<motion.li className='block' key={index} variants={itemVariants} onClick={handleClick}>
										<Link href={navLink.href}>
										<StaggeredText
										once
										text={navLink.name}
										el='div'
									/>
										</Link>
									</motion.li>
								))}
							</motion.ul>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export default Nav;
