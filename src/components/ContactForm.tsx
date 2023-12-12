'use client';
import React from 'react';
import Container from './Container';

const ContactForm = () => {
	const handleClick = (event: { preventDefault: () => void; }) => {
		event.preventDefault()
		alert('message sent!')
	}
	return (
		<section>
			<Container>
						{/* text - start */}
						<div className='mb-5 md:mb-8'>
							<h2 className='mb-4 text-center text-2xl font-bold text-fakbarrwhite md:mb-6 lg:text-3xl'>Get in touch</h2>
							{/* <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
								This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
							</p> */}
						</div>
						{/* text - end */}
						{/* form - start */}
						<form  className='mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2'>
							<div>
								<label htmlFor='first-name' className='mb-2 inline-block text-sm text-fakbarrwhite sm:text-base'>
									First name*
								</label>
								<input name='first-name' className='w-full rounded border bg-fakbarrblack px-3 py-2 text-fakbarrwhite outline-none transition duration-100 focus:ring' />
							</div>
							<div>
								<label htmlFor='last-name' className='mb-2 inline-block text-sm text-fakbarrwhite sm:text-base'>
									Last name*
								</label>
								<input name='last-name' className='w-full rounded border bg-fakbarrblack px-3 py-2 text-fakbarrwhite outline-none transition duration-100 focus:ring' />
							</div>
							<div className='sm:col-span-2'>
								<label htmlFor='company' className='mb-2 inline-block text-sm text-fakbarrwhite sm:text-base'>
									Company
								</label>
								<input name='company' className='w-full rounded border bg-fakbarrblack px-3 py-2 text-fakbarrwhite outline-none transition duration-100 focus:ring' />
							</div>
							<div className='sm:col-span-2'>
								<label htmlFor='email' className='mb-2 inline-block text-sm text-fakbarrwhite sm:text-base'>
									Email*
								</label>
								<input name='email' className='w-full rounded border bg-fakbarrblack px-3 py-2 text-fakbarrwhite outline-none transition duration-100 focus:ring' />
							</div>
							<div className='sm:col-span-2'>
								<label htmlFor='subject' className='mb-2 inline-block text-sm text-fakbarrwhite sm:text-base'>
									Subject*
								</label>
								<input name='subject' className='w-full rounded border bg-fakbarrblack px-3 py-2 text-fakbarrwhite outline-none transition duration-100 ' />
							</div>
							<div className='sm:col-span-2'>
								<label htmlFor='message' className='mb-2 inline-block text-sm text-fakbarrwhite sm:text-base'>
									Message*
								</label>
								<textarea name='message' className='h-64 bg-fakbarrblack w-full rounded border px-3 py-2 text-fakbarrwhite outline-none transition duration-100 focus:ring' defaultValue={''} />
							</div>
							<div className='flex items-center justify-between sm:col-span-2'>
								<button onClick={handleClick} className='inline-block rounded-lg bg-[#161616] px-8 py-3 text-center text-sm font-semibold text-white outline-none transition duration-100 hover:scale-105 focus-visible:ring md:text-base'>
									Send
								</button>
								<span className='text-sm text-fakbarrwhite'>*Required</span>
							</div>
						</form>
						{/* form - end */}
            			</Container>
		</section>
	);
};

export default ContactForm;


