import React from 'react'
import about from '../images/about.png';



const About = () => {
  return (
    <div id='about' className='mt-[40px]'>
      <h1 className='main-title'>Who We Are?</h1>

      <div className="content flex gap-[30px] flex-col-reverse lg:flex-row items-center px-[50px]">

        <p className="text font-arvo flex-1 text-[20px] sm:text-[30px] lg:text-[25px] xl:text-[30px] text-gray-700 leading-[2.5]">

        A young and dynamic team capable of reliably meeting all your expectations with the sole aim of helping you achieve your goals by prioritizing the promotion of your brand.

        </p>

        <div className="image flex-1">
          <img className='w-full' src={about} alt="about" />
        </div>

      </div>


    </div>
  )
}

export default About
