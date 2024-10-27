import {useEffect} from 'react'
import {Link, useParams} from 'react-router-dom';
import blogs from '../data/blogs';

const Blog = () => {

    const {blogId} = useParams();

    const blog = blogs.find(item=>+item.id === +blogId);

    useEffect(()=>{

        window.scrollTo({top: 0});

    },[])

  return (
    <div className='px-[20px] py-[30px]'>

        <p>
            <Link to="/" className='underline text-blue-500'>Home</Link> {" > "}
            <span>Blogs</span> {" > "}
            <span>{blogId}</span>

        </p>
      
        <h1 className='font-bold text-[30px] sm:text-[50px] mb-[60px] text-center w-[900px] max-w-full mx-auto'>{blog.title}</h1>

        {
            blog.content.map((item,index)=>(

                <div key={index} className={`${index !== blog.content.length - 1 ? 'mb-[40px]' : ''}`}>
                    <h3 className='font-semibold text-[18px] mb-[20px]'>{item.title}</h3>

                    <p className='text-gray-700 leading-[1.7]'>{item.text}</p>
                </div>
            ))
        }

    </div>
  )
}

export default Blog
