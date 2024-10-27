import logo from '../images/logo.jpg'

const Logo = ({textStyle,width}) => {
  return (

    <div>

      <img className={`${width}`} src={logo} alt="logo" />
      {/* <span className={`${textStyle} text-main font-open text-center`}>InnoTech</span> */}

    </div>
  )
}

export default Logo
