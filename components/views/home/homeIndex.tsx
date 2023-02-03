import React, {useState, useEffect} from 'react';

// components
import NavIndex from '@/components/globals/nav/navIndex';

// NEXT
import Image from 'next/image'
import Link from 'next/link'

interface homeIndexPropsI {}

const HomeIndex: React.FC<homeIndexPropsI> = ({}) => {
  const [shouldShowDrawer, setShouldShowDrawer] =useState<boolean>(false);
  const getStarted = () => setShouldShowDrawer(prev => !prev);

  return (
    <div className='h-auto w-full bg-white px-5 md:px-16'>
      {/* Header */}
      <header className='h-auto w-full flex flex-col items-center justify-center'>
        {/* Nav Menu */}
        <NavIndex showDrawer={shouldShowDrawer} updateDrawer={setShouldShowDrawer} />

        {/* Hero */}
        <section id="hero" className="h-[30rem] w-full bg-gray-200 rounded-2xl my-10 heroBg flex items-center justify-center">
          <div className='h-60 w-10/12 flex flex-col items-center justify-center'>
            <h2 className='w-full text-5xl md:text-6xl text-white font-bold text-center'>Drive The Car You Want</h2>
            <p className='text-lg text-white font-normal text-center mt-3'>Connecting car owners to different channels of help</p>
            <div className='mt-10 flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-5'>
              <button 
              onClick={getStarted}
              className='bg-white rounded-full px-10 py-2 text-black flex items-center justify-center'>
              Get Started
              </button>
              <Link href="/forum">
                <button className='bg-[#5CB9ED] rounded-full px-10 py-2 text-white flex items-center justify-center'>
                Ask an Expert
                </button>
              </Link>
            </div>
          </div>
        </section>
      </header>

      {/* About */}
      <section id="about" className="h-auto md:h-[30rem] w-full md:w-10/12 mx-auto bg-gray-50 rounded-2xl my-32 flex flex-col md:flex-row items-center justify-center">
        {/* Caption */}
        <div className='h-full w-full md:w-1/2 flex flex-col items-center md:items-start justify-center space-y-5 md:space-y-10 pt-20 md:pt-0 md:pl-20'>
          <h2 className='w-full text-4xl font-medium text-center md:text-left'>Who Are We?</h2>
          <p className='w-11/12 md:w-full leading-loose text-xl md:text-lg text-gray- text-center md:text-left'>We are on a mission to bridge the gap between car owners and experts, by providing a best in class platform to encompass all the services and products that will enable any individual with a car fast and easy access to help.</p>
          <button 
          onClick={getStarted}
          className='border border-gray-300 rounded-full px-10 py-2 text-gray-700 flex items-center justify-center'>
              Get Started
          </button>
        </div>
        {/* Image */}
        <div className='h-full w-full md:w-1/2 flex flex-col items-end justify-end'>
         <div className='h-full w-full position relative flex items-center justify-end overflow-hidden'>
            <Image src="/assets/images/side_photo.png" width={350} height={350} className="object-cover" alt="" />
         </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="h-auto md:h-[30rem] w-full mx-auto rounded-2xl my-32 flex items-end justify-center px-5 py-20 md:p-10 featuresBg">
          <div className='h-auto md:h-52 w-full md:w-10/12 rounded-2xl bg-black/50 p-10 flex items-center justify-center mx-auto'>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-10'>
              {/* Block */}
              <div className='flex flex-col items-start justify-center space-y-3'>
                <h2 className='font-medium text-xl text-white'>Guided Assitance</h2>
                <p className='text-md text-white font-light leading-normal'>You will get access to a pool of professionals ready to take you by the hand as you take a step closer to solving your car problems.</p>
              </div>
              {/* Block */}
              <div className='flex flex-col items-start justify-center space-y-3'>
                <h2 className='font-medium text-xl text-white'>Smart Feeds</h2>
                <p className='text-md text-white font-light leading-normal'>Get instant acceess to regular tips & tricks to keep you informed and updated about the latest technologies, news and facts in the industry.</p>
              </div>
              {/* Block */}
              <div className='flex flex-col items-start justify-center space-y-3'>
                <h2 className='font-medium text-xl text-white'>Community</h2>
                <p className='text-md text-white font-light leading-normal'>Learn from other car owners and experts sharing ideas about topics of interest and helping each other in the community.</p>
              </div>
            </div>
          </div>
      </section>

      {/* Entities */}
      <section id="entities" className="h-auto md:h-[30rem] w-full mx-auto flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10 my-32">
        {/* Experts */}
        <div className='h-full w-82 md:w-96 rounded-2xl bg-black p-10 flex flex-col items-start justify-center'>
          <h3 className='font-medium text-md text-white'>AutoSick Experts</h3>
          <h1 className='font-medium text-4xl text-white my-10'>AUTOSICK FOR CAR EXPERTS</h1>
          <p className='font-light text-md text-white leading-normal'>Share your experience and expertise to the world and earn passive income through your side hustle.</p>
          <button 
          onClick={getStarted}
          className='flex items-center justify-center space-x-3 mt-10'>
            <span className='font-medium text-sm text-white'>Get Started</span>
            <i className='text-white text-lg la la-arrow-circle-right'></i>
          </button>
        </div>
        {/* Owners */}
        <div className='h-full w-82 md:w-96 rounded-2xl bg-[#5CB9ED] p-10 flex flex-col items-start justify-center'>
          <h3 className='font-medium text-md text-white'>AutoSick Owners</h3>
          <h1 className='font-medium text-4xl text-white my-10'>AUTOSICK FOR CAR OWNERS</h1>
          <p className='font-light text-md text-white leading-normal'>Get dedicated help and instant access to a wealth of resources and services that will solve your car problems.</p>
          <button 
          onClick={getStarted}
          className='flex items-center justify-center space-x-3 mt-10'>
            <span className='font-medium text-sm text-white'>Get Started</span>
            <i className='text-white text-lg la la-arrow-circle-right'></i>
          </button>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="h-auto md:h-60 w-full md:w-10/12 mx-auto bg-gray-50 rounded-2xl my-32 flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-5 py-10 px-5 ">
        <div className='h-full w-full md:w-1/2 flex items-center justify-start md:justify-center'>
          <h2 className='w-full md:w-8/12 font-medium text-5xl text-gray-700 leading-tight'>Get Your Car Fixed Up Now</h2>
        </div>
        <div className='h-full w-full md:w-1/2 flex flex-col items-start justify-center space-y-5'>
          <p className='w-full md:w-10/12 font-normal text-xl text-gray-700 leading-normal'>Are you convinced already? What are you waiting for then? Hop on and get empowered to do more from the comfort of your home!</p>
          <button onClick={getStarted} className='border border-gray-300 rounded-full px-5 py-2'>Get Started</button>
        </div>
      </section>

      {/* Teams */}
      <section id="teams" className="h-auto md:h-[30rem] w-full bg-transparent rounded-2xl my-32 flex flex-col items-center justify-center space-y-16">
        {/* Header */}
        <div className='h-auto w-full flex flex-col items-center justify-center space-y-2'>
          <h2 className='w-full md:w-8/12 font-medium text-5xl text-gray-700 leading-tight text-center'>Meet The Team</h2>
          <p className='w-full md:w-4/12 font-normal text-xl text-gray-700 leading-normal text-center'>Our team comprised of professional designers and developers alike.</p>
        </div>
        {/* Gallery */}
        <div className='h-auto w-full grid grid-cols-1 md:grid-cols-4 gap-10'>
          <div className='h-72 w-full bg-transparent flex flex-col items-center justify-center space-y-4'>
            <div className='h-52 w-52 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden position relative'>
              <Image src="/assets/images/teams/default.jpg" className="object-cover" fill alt="Team Member" />
            </div>
            <div className='h-auto w-full flex flex-col items-center justify-center space-y-0'>
              <h2 className='font-medium text-xl text-gray-700 text-center'>Pratik Gerald</h2>
              <p className='text-md text-gray-400 font-normal text-center'>BackEnd Developer</p>
            </div>
          </div>
          <div className='h-72 w-full bg-transparent flex flex-col items-center justify-center space-y-4'>
            <div className='h-52 w-52 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden position relative'>
              <Image src="/assets/images/teams/default.jpg" className="object-cover" fill alt="Team Member" />
            </div>
            <div className='h-auto w-full flex flex-col items-center justify-center space-y-0'>
              <h2 className='font-medium text-xl text-gray-700 text-center'>Pratik Gerald</h2>
              <p className='text-md text-gray-400 font-normal text-center'>FrontEnd Developer</p>
            </div>
          </div>
          <div className='h-72 w-full bg-transparent flex flex-col items-center justify-center space-y-4'>
            <div className='h-52 w-52 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden position relative'>
              <Image src="/assets/images/teams/default.jpg" className="object-cover" fill alt="Team Member" />
            </div>
            <div className='h-auto w-full flex flex-col items-center justify-center space-y-0'>
              <h2 className='font-medium text-xl text-gray-700 text-center'>Pratik Gerald</h2>
              <p className='text-md text-gray-400 font-normal text-center'>UI/UX Desginer</p>
            </div>
          </div>
          <div className='h-72 w-full bg-transparent flex flex-col items-center justify-center space-y-4'>
            <div className='h-52 w-52 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden position relative'>
              <Image src="/assets/images/teams/default.jpg" className="object-cover" fill alt="Team Member" />
            </div>
            <div className='h-auto w-full flex flex-col items-center justify-center space-y-0'>
              <h2 className='font-medium text-xl text-gray-700 text-center'>Precious Adeyinka</h2>
              <p className='text-md text-gray-400 font-normal text-center'>UI Engineer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="h-auto md:h-[30rem] w-full bg-transparent rounded-2xl mt-10 mb-5 flex flex-col items-center justify-center space-y-10">
        {/* CTA */}
        <div className='h-auto md:h-80 w-full bg-black rounded-2xl flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 py-10 px-5 md:px-0 md:py-0'>
          <div className='h-full w-full md:w-1/2 flex flex-col items-start justify-center md:pl-20 space-y-7'>
            <h2 className='w-full md:w-9/12 font-normal text-4xl md:text-6xl text-white leading-none'>Contact Us, <br /> We Are All Ears</h2>
            <div className='h-auto w-full flex flex-col md:flex-row items-start md:items-center justify-center md:justify-start space-y-3 md:space-y-0 md:space-x-3'>
              <a href="mailto:hello@autosick.com" className='border border-gray-300 rounded-full px-10 py-2 text-white flex items-center justify-center'>
              hello@autosick.com
              </a>
              <a href="tel:444-444-444-444" className='border border-gray-300 rounded-full px-10 py-2 text-white flex items-center justify-center'>
              444-444-444-444
              </a>
            </div>
          </div>
          <div className='h-full w-full md:w-1/2 flex flex-col items-start justify-center space-y-5'>
            <p className='w-full md:w-8/12 font-light text-xl md:text-2xl text-white leading-normal'>Felling overhelmed? Reach out to us, we are happy to provide support, the light is always on at our place.</p>
          </div>
        </div>
        {/* copyright */}
        <div className='h-auto w-full flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0'>
          <div className='h-auto w-full md:w-1/2 flex items-center justify-center md:justify-start'>
            <p className='font-normal text-sm text-gray-400'>AutoSick - &copy; Copyright 2023 | All Rights Reserved</p>
          </div>
          <div className='h-auto w-full md:w-1/2 flex items-center justify-center md:justify-end space-x-4'>
            <Link href="#">
              <p className='font-normal text-sm text-gray-400'>Privacy Policy</p>
            </Link>
            <Link href="#">
              <p className='font-normal text-sm text-gray-400'>Terms of Use</p>
            </Link>
            <Link href="#">
              <p className='font-normal text-sm text-gray-400'>FAQ</p>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomeIndex;