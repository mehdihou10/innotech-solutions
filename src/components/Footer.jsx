import React from 'react'
import Logo from './Logo';

const Footer = () => {
  return (
    <div className='flex justify-center items-center font-open font-semibold gap-[6px] bg-gray-300 px-[30px] py-[20px] text-[15px] mt-[50px]'>
      <span>&copy;</span>
       {new Date().getFullYear()}
       <Logo textStyle="text-[20px]" />
        All Right Reserved
    </div>
  )
}

export default Footer
