import {useState} from 'react'
import { HiBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import Logo from './Logo';
import { contact } from '../data/constantes';



const ButtonEmail = ({email})=>(

  <a
       className='grid place-items-center w-[200px] h-[60px] bg-main hover:bg-bold duration-500 text-white rounded-[6px] border font-semibold uppercase'
        href={`mailto:${email}`}
        target='_blank'
        rel="noreferrer"
        >
          Contact us
  </a>

)

const Header = () => {

  const [showList,setShowList] = useState(false);



  return (
    <div className='sticky top-0 z-[11] flex justify-between items-center py-[15px] px-[50px] bg-white border-b h-[120px]'>
      
      <a href="#">
        <Logo width="w-[80px]" />
      </a>

      <ul className={`duration-500 fixed top-0 ${showList ? 'left-0' : '-left-full'}
       w-full h-full z-[10] bg-light text-[25px] font-semibold
      lg:relative lg:top-0 lg:left-0 lg:w-auto lg:h-auto
       lg:bg-transparent lg:text-[18px] lg:font-normal
         flex flex-col lg:flex-row justify-center items-center gap-[30px] font-open`}>

          <MdClose onClick={()=>setShowList(false)} className='lg:hidden text-white absolute top-[20px] right-[20px] text-[50px] cursor-pointer' />
        <li onClick={()=>setShowList(false)}><a href="#">Home</a></li>
        <li onClick={()=>setShowList(false)}><a href="#about">About Us</a></li>
        <li onClick={()=>setShowList(false)}><a href="#services">Services</a></li>
        <li onClick={()=>setShowList(false)}><a href="#blogs">Blogs</a></li>
        <li onClick={()=>setShowList(false)}><a href="#contact">Contact</a></li>

        <div onClick={()=>setShowList(false)} className="block md:hidden text-[18px]">
          <ButtonEmail email={contact.email} />
        </div>

      </ul>

      <div className="hidden md:block">
      <ButtonEmail email={contact.email} />
      </div>

      <div className="lg:hidden">
        <HiBars3 onClick={()=>setShowList(true)} className='text-[40px] cursor-pointer' />
      </div>

    </div>
  )
}

export default Header
