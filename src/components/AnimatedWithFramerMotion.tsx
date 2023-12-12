'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BlurIn = ({ children }: { children: React.ReactNode }) => {
	const variants1 = {
		hidden: { filter: 'blur(10px)', opacity: 0 },
		visible: { filter: 'blur(0px)', opacity: 1 },
	};
	return (
		<motion.div initial='hidden' whileInView='visible' transition={{ duration: 1 }} variants={variants1} className='text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]'>
			{children}
		</motion.div>
	);
};

const FadeDown = () => {
	const FADE_DOWN_ANIMATION_VARIANTS = {
		hidden: { opacity: 0, y: -10 },
		show: { opacity: 1, y: 0, transition: { type: 'spring' } },
	};
	return (
		<motion.div
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
			variants={{
				hidden: {},
				show: {
					transition: {
						staggerChildren: 0.15,
					},
				},
			}}
		>
			<motion.div className='text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]' variants={FADE_DOWN_ANIMATION_VARIANTS}>
				Fade Down
			</motion.div>
			<motion.div className='mt-6 text-center md:text-2xl' variants={FADE_DOWN_ANIMATION_VARIANTS}>
				Animation Preview
			</motion.div>
			<motion.div className='mx-auto mt-6 flex items-center justify-center space-x-5' variants={FADE_DOWN_ANIMATION_VARIANTS}>
				If you&apos;re seeing this, thank you for trying my project out! - C.J.A
			</motion.div>
		</motion.div>
	);
};

const FadeUp = () => {
	const FADE_UP_ANIMATION_VARIANTS = {
		hidden: { opacity: 0, y: 10 },
		show: { opacity: 1, y: 0, transition: { type: 'spring' } },
	};
	return (
		<motion.div
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
			variants={{
				hidden: {},
				show: {
					transition: {
						staggerChildren: 0.15,
					},
				},
			}}
		>
			<motion.div className='text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]' variants={FADE_UP_ANIMATION_VARIANTS}>
				Fade Up
			</motion.div>
			<motion.div className='mt-6 text-center md:text-2xl' variants={FADE_UP_ANIMATION_VARIANTS}>
				Animation Preview
			</motion.div>
			<motion.div className='mx-auto mt-6 flex items-center justify-center space-x-5' variants={FADE_UP_ANIMATION_VARIANTS}></motion.div>
		</motion.div>
	);
};

const GradualSpacing = ({ text = 'Gradual Spacing' }: { text: string }) => {
	const gradual = {
		hidden: { opacity: 0, x: -20 },
		visible: { opacity: 1, x: 0 },
	};
	return (
		<div className='flex space-x-1 justify-center'>
			<AnimatePresence>
				{text.split('').map((char, i) => (
					<motion.span
						key={i}
						initial='hidden'
						whileInView='visible'
						exit='hidden'
						variants={gradual}
						transition={{ duration: 0.5, delay: i * 0.1 }}
						className='text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]'
					>
						{char === ' ' ? <span>&nbsp;</span> : char}
					</motion.span>
				))}
			</AnimatePresence>
		</div>
	);
};

const MultiDirectionSlide = () => {
	const MULTIDIRECTION_SLIDE_VARIANTS = {
		hidden: { opacity: 0, x: '-25vw' },
		visible: { opacity: 1, x: 0 },
		right: { opacity: 0, x: '25vw' },
	};
	return (
		<div className='overflow-hidden'>
			<motion.div
				initial='hidden'
				whileInView='visible'
				variants={MULTIDIRECTION_SLIDE_VARIANTS}
				transition={{ duration: 1 }}
				className='text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]'
			>
				Multi Direction
			</motion.div>

			<motion.div
				initial='right'
				animate='visible'
				variants={MULTIDIRECTION_SLIDE_VARIANTS}
				transition={{ duration: 1 }}
				className='text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]'
			>
				Slide
			</motion.div>
		</div>
	);
};

const RippleWordPullUp = ({ words = 'Ripple Word Pull Up' }: { words: string }) => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { y: 20, opacity: 0 },
		show: { y: 0, opacity: 1 },
	};
	return (
		<motion.span variants={container} initial='hidden' whileInView='show' className='text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]'>
			{words.split(' ').map((word, i) => (
				<motion.span key={i} variants={item} style={{ display: 'inline-block', paddingRight: '15px' }}>
					{word === '' ? <span>&nbsp;</span> : word}
				</motion.span>
			))}
		</motion.span>
	);
};

const RotateText = () => {
	const words = ['ROTATE', 'BETWEEN', 'TEXT'];
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % words.length);
		}, 3000);

		// Clean up interval on unmount
		return () => clearInterval(interval);
	}, [words.length]);
	return (
		<AnimatePresence mode='wait'>
			<motion.h1
				key={words[index]}
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 50 }}
				transition={{ duration: 0.5 }}
				className='text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]'
			>
				{words[index]}
			</motion.h1>
		</AnimatePresence>
	);
};

const SeparateAway = () => {
	const separate = {
		hidden: { opacity: 0, y: 0 },
		visible: (custom: number) => ({
			opacity: 1,
			y: custom * 5,
			transition: { duration: 1.5 },
		}),
	};
	return (
		<div>
			<motion.h1 custom={-1} variants={separate} initial='hidden' whileInView='visible' className='text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]'>
				Separate
			</motion.h1>
			<motion.h1 custom={1} variants={separate} initial='hidden' whileInView='visible' className='text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]'>
				Away
			</motion.h1>
		</div>
	);
};

const SlightFlip = () => {
	const word = 'Slight Flip Text';
	const variants1 = {
		hidden: { rotateX: -90, opacity: 0 },
		visible: { rotateX: 0, opacity: 1 },
	};
	return (
		<div className='flex space-x-2 justify-center'>
			<AnimatePresence>
				{word.split('').map((char, i) => (
					<motion.span
						key={i}
						initial='hidden'
						whileInView='visible'
						exit='hidden'
						variants={variants1}
						transition={{ duration: 0.5, delay: i * 0.2 }}
						className='text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]'
						style={{ transformOrigin: '50% 50%' }}
					>
						{char}
					</motion.span>
				))}
			</AnimatePresence>
		</div>
	);
};

const StaggeredLetterFadeIn = ({ sentence = 'Staggered Letter Fade In' }: { sentence: string }) => {
	const wordVariants = {
		hidden: { opacity: 0 },
		visible: (i: number) => ({ y: 0, opacity: 1, transition: { delay: i * 0.1 } }),
	};
	const words = sentence.split(' ');
	return (
		<motion.span initial='hidden' whileInView='visible' viewport={{ once: false }} className='text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]'>
			{words.map((word, i) => (
				<motion.span key={word} variants={wordVariants} custom={i}>
					{word}{' '}
				</motion.span>
			))}
		</motion.span>
	);
};

const StaggeredLetterPullUp = ({ words = 'Staggered Letter Pull Up' }: { words: string }) => {
	const letters = words.split('');

	const pullupVariant = {
		initial: { y: 90, opacity: 0 },
		animate: (i: number) => ({
			y: 0,
			opacity: 1,
			transition: {
				delay: i * 0.05, // Delay each letter's animation by 0.05 seconds
			},
		}),
	};
	return (
		<span className='flex justify-center'>
			{letters.map((letter: string, i: number) => (
				<motion.span
					key={i}
					variants={pullupVariant}
					initial='initial'
					whileInView='animate'
					custom={i}
					className='text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem] overflow-hidden'
				>
					{letter === ' ' ? <span>&nbsp;</span> : letter}
				</motion.span>
			))}
		</span>
	);
};

const TypingEffect = ({ text = 'Typing Effect' }: { text: string }) => {
	const [displayedText, setDisplayedText] = React.useState('');
	const [i, setI] = React.useState(0);

	useEffect(() => {
		const typingEffect = setInterval(() => {
			if (i < text.length) {
				setDisplayedText((prevState) => prevState + text.charAt(i));
				setI(i + 1);
			} else {
				clearInterval(typingEffect);
			}
		}, 200);

		return () => {
			clearInterval(typingEffect);
		};
	}, [i, text]);

	return <h1 className='text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]'>{displayedText ? displayedText : 'Typing Effect'}</h1>;
};

const WavyText = ({ word = 'Wavy Text' }: { word: string }) => {
	const variants1 = {
		hidden: { y: 10 },
		visible: { y: -10 },
	};
	return (
		<div className='flex space-x-2 justify-center'>
			<AnimatePresence>
				{word.split('').map((char, i) => (
					<motion.span
						key={i}
						initial='hidden'
						whileInView='visible'
						exit='hidden'
						variants={variants1}
						transition={{ yoyo: Infinity, duration: 0.5, delay: i * 0.2 }}
						className='text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]'
					>
						{char}
					</motion.span>
				))}
			</AnimatePresence>
		</div>
	);
};

export { BlurIn, FadeDown, FadeUp, GradualSpacing, MultiDirectionSlide, RippleWordPullUp, RotateText, SeparateAway, SlightFlip, StaggeredLetterFadeIn, StaggeredLetterPullUp, TypingEffect, WavyText };
