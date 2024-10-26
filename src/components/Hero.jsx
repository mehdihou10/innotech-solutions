import hero from '../images/hero.png';
import { contact } from '../data/constantes';


const Hero = () => {


  return (

    <div className="hero relative">

    
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:flex items-center gap-[30px] px-[20px] lg:px-[50px] py-[20px]'>
      
      <div className="text flex-1 text-center lg:text-left">
        <h1 className='uppercase text-[25px] sm:text-[50px] xl:text-[55px] font-semibold font-arvo'>
        Creative Software Development and Strategy Agency
        </h1>

        <p className='text-gray-600 font-open my-[20px] text-[18px] md:text-[20px]'>
        The only strategic agency dedicated to software development for meaningful and visionary decisions.
        </p>

        <div className="buttons flex flex-wrap gap-[20px] justify-center lg:justify-normal">

          <a className='grid place-items-center
           w-[200px] h-[60px] border rounded-[6px] duration-500 hover:bg-bold
           bg-main text-white text-[18px] uppercase' href={`mailto:${contact.email}`}>Contact Us</a>

          {/* <a className='grid place-items-center w-[200px] h-[60px]
           border border-black rounded-[6px] duration-500 hover:bg-main hover:text-white hover:border-gray-500
          bg-white text-[18px] uppercase' href="#projects">Our projets</a> */}

        </div>
      </div>

      <div className="image flex-1 hidden lg:block">
      <img className='w-full hero-image' src={hero} alt="hero" />
      </div>

    </div>

    </div>
   
  )
}

export default Hero
