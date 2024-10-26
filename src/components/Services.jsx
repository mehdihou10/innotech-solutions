import { services } from '../data/services'


const Services = () => {




  return (
    <div id='services' className='mt-[100px] bg-[#e7b6e663] py-[100px]'>
      
      <h1 className='main-title'>Our Services</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] px-[40px]">
        {
          services.map((service,index)=>(
            <div key={index} className="service duration-500 hover:-translate-y-[10px] flex flex-col gap-[20px] justify-center items-center bg-white rounded-[6px] shadow-lg h-[250px] px-[20px]">

              <div className="text-[40px] text-main">
              {service.image}
              </div>

              <h3 className='text-[25px] font-semibold text-center'>{service.title}</h3>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services
