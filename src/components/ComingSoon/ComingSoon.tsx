import logoUrl from '../../assets/images/logo.svg'
import imgUrl from '../../assets/images/illustration-dashboard.png'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

import './ComingSoon.css'

const ComingSoon = () => {
  return (
    <div className="font-light relative text-center md:flex flex-col items-center pb-32 "> 
      <div className="px-5">
        {/* Logo */}
        <div className="py-4 mb-8">  
          <img src={logoUrl} className='m-auto'/>
        </div>
        {/* Copy */}
        <div className="text-center">
          <h1 className="text-light text-2xl md:text-4xl">We are launching <span className="text-dark font-bold">soon!</span></h1>
          <p className="text-dark text-sm md:text-xl py-4">Subscribe and get notified</p>
        </div>
        {/* Form */}
        <div className="md:flex items-center px-5 py-4 mb-8 gap-4">  
          <div className="text-sm h-12 mb-3 md:mb-0">
            <input 
              className="text-primary border border-light focus:border-primary focus:outline-none px-6 w-full md:w-72 h-full rounded-full overflow-hidden"
              placeholder="Your email address..."
            />
          </div>
          <button className="font-semibold bg-primary rounded-full text-sm text-white w-full md:w-auto px-12 py-3 shadow-lg shadow-blue-200">
            Notify Me
          </button>
        </div>
        {/* Image */}
        <div className="py-5">  
          <img src={imgUrl} className='max-w-full w-[640px]'/>
        </div>
      </div>
      {/* Footer */}
      <div className="absolute bottom-0 flex justify-center items-end w-full h-32 text-center">
        <div className="text-xs">
          <div className="flex justify-center gap-3">  
            <a href="#" className="inline-block rounded-full p-2 border border-primary text-primary hover:text-white hover:bg-primary">
              <FaFacebookF/>
            </a>
            <a href="#" className="inline-block rounded-full p-2 border border-primary text-primary hover:text-white hover:bg-primary">
              <FaTwitter/>
            </a>
            <a href="#" className="inline-block rounded-full p-2 border border-primary text-primary hover:text-white hover:bg-primary">
              <FaInstagram/>
            </a>
          </div>
          <p className="text-light pt-8">&copy; Copyright Ping. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
