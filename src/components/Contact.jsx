import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {contact} from '../data/constantes';


const Info = ({icon,title,data})=>(

  <div className="flex items-center gap-[10px]">
    <div className="icon grid place-items-center w-[50px] h-[50px] text-[20px] rounded-full bg-light text-main">{icon}</div>

    <div className="">
      <h4 className='capitalize font-semibold text-[18px] mb-[10px]'>{title}</h4>
      <h4 className='text-gray-500 font-semibold'>{data}</h4>

    </div>
  </div>

)


const Contact = () => {



  return (
    <div id='contact' className='mt-[70px] px-[20px]'>
      
      <h1 className='main-title'>Contact Us</h1>

      <div className="w-[800px] max-w-full mx-auto bg-white box-shadow rounded-lg">
        <div className="flex flex-wrap items-center justify-between gap-[20px] px-[30px] py-[40px]">

          <Info icon={<FaLocationDot />} title="location" data={contact.location}/>
          <Info type="tel" icon={<FaPhone />} title="call" data={contact.phone_number}/>
          <Info type="mail" icon={<MdEmail />} title="email" data={contact.email}/>
          
        </div>

        {/* <div className="map">
        <iframe className='w-full h-[500px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.0355472415035!2d6.640606674931157!3d36.38413349104424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f177bc9940ae61%3A0x4219756cdf2a1675!2sInnova%20Art%20Design!5e0!3m2!1sfr!2sdz!4v1718111882293!5m2!1sfr!2sdz" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div> */}
      </div>
    </div>
  )
}

export default Contact
