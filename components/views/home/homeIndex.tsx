import React from 'react';

// components
import NavIndex from '@/components/globals/nav/navIndex';

interface homeIndexPropsI {}

const HomeIndex: React.FC<homeIndexPropsI> = ({}) => {
  return (
    <div className='h-auto w-full bg-white px-16'>
      {/* Header */}
      <header className='h-auto w-full flex flex-col items-center justify-center'>
        {/* Nav Menu */}
        <NavIndex />

        {/* Hero */}
        <section id="hero" className="h-[30rem] w-full bg-gray-200 rounded-2xl my-10"></section>
      </header>

      {/* About */}
      <section id="about" className="h-[30rem] w-10/12 mx-auto bg-gray-200 rounded-2xl my-10"></section>

      {/* Features */}
      <section id="features" className="h-[30rem] w-full mx-auto bg-gray-200 rounded-2xl my-10"></section>

      {/* Entities */}
      <section id="entities" className="h-[30rem] w-full mx-auto flex items-center justify-center space-x-10 my-10">
        <div className='h-full w-96 rounded-2xl bg-gray-200'></div>
        <div className='h-full w-96 rounded-2xl bg-gray-200'></div>
      </section>

      {/* CTA */}
      <section id="cta" className="h-52 w-10/12 mx-auto bg-gray-200 rounded-2xl my-10"></section>

      {/* Teams */}
      <section id="teams" className="h-[30rem] w-full bg-gray-200 rounded-2xl my-10"></section>

      {/* Footer */}
      <footer id="hero" className="h-[30rem] w-full bg-gray-200 rounded-2xl my-10"></footer>
    </div>
  )
}

export default HomeIndex;