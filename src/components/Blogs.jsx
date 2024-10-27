import React from 'react'
import blogs from '../data/blogs';
import { Link } from 'react-router-dom';
import { FaSquareArrowUpRight } from "react-icons/fa6";


const Blogs = () => {
  return (
    <div id="blogs" className='mt-[70px] px-[20px]'>
      <h3 className='main-title'>Blogs</h3>

      {
        blogs.length === 0 ?

        <p className='text-gray-500 italic text-center'>Nothing To Show</p>

        : 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {
            blogs.map(blog=>(

              <div key={blog.id} className="relative bg-white px-[20px] py-[25px] rounded-[6px] h-[280px] shadow-lg">

                <h1 className='text-center mt-[20px] font-semibold text-[22px] leading-[1.5]'>{blog.title}</h1>

                <Link
                 to={`/blogs/${blog.id}`}
                 className='absolute left-1/2 -translate-x-1/2 bottom-[20px] flex justify-center items-center gap-[10px] rounded-[6px] w-[120px] mx-auto text-[18px] max-w-full h-[40px] text-white bg-main'
                 >

                <FaSquareArrowUpRight />
                Visit

                </Link>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Blogs
