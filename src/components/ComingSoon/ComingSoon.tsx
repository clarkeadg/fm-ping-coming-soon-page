import { useState } from 'react'

import logoUrl from '../../assets/images/logo.svg'
import imgUrl from '../../assets/images/illustration-dashboard.png'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

import './ComingSoon.css'

const ComingSoon = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)

  function validateEmail(email:string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleType = (val:string) => {
    setError(false);
    setEmail(val);
  }

  const handleSubmit = () => {
    setError(false);
    if(!validateEmail(email)) {
      setError(true);
    }
  }
  
  return (
    <div className="font-light relative text-center md:flex flex-col items-center pb-32 "> 
      <div className="px-5">
        {/* Logo */}
        <div className="mt-16 mb-12 md:mt-7 md:mb-10">  
          <img src={logoUrl} alt="Ping" className='m-auto'/>
        </div>
        {/* Copy */}
        <div className="text-center">
          <h1 className="text-light text-2xl md:text-4xl tracking-wider md:tracking-wide">We are launching <span className="text-dark font-bold">soon!</span></h1>
          <p className="text-dark text-sm md:text-md tracking-wider py-5 md:py-4">Subscribe and get notified</p>
        </div>
        {/* Form */}
        <div className="px-10 py-6 mb-16 md:px-5 md:py-4 md:mb-12">
          <form onSubmit={(e)=>{ e.preventDefault(); handleSubmit(); }} className="md:flex gap-4">  
            <div className="text-sm mb-4 md:mb-0">
              <input 
                className={`border ${error ? "border-warning" : "border-secondary"} text-secondary placeholder-current focus:text-black focus:border-primary focus:outline-none px-6 py-3 w-full md:w-80 rounded-full overflow-hidden`}
                placeholder="Your email address..."
                type="text"
                value={email}
                onChange={(e) => handleType(e.target.value)}
              />
              { error && <div className="relative">
                <div className="error-message text-warning md:text-left md:absolute top-0 left-6 text-xs italic font-semibold py-2">
                  Please provide a valid email address
                </div>
              </div> }
            </div>
            <button type="submit" className="md:h-12 font-semibold bg-primary rounded-full text-sm text-white w-full md:w-auto px-12 py-3 shadow-lg shadow-blue-200 hover:opacity-90">
              Notify Me
            </button>
          </form>
        </div>
        {/* Image */}
        <div className="px-4 mb-24 md:px-2 md:mb-0">  
          <img src={imgUrl} alt="Ping Dashboard" className='max-w-full w-[640px]'/>
        </div>
      </div>
      {/* Footer */}
      <div className="absolute bottom-0 md:bottom-12 flex justify-center items-end w-full h-32 text-center">
        <div className="text-lg md:text-[12px]">
          <div className="flex justify-center gap-4 md:gap-2">  
            <div className="inline-block rounded-full p-2 border border-secondary text-primary hover:text-white hover:bg-primary hover:border-primary">
              <FaFacebookF/>
            </div>
            <div className="inline-block rounded-full p-2 border border-secondary text-primary hover:text-white hover:bg-primary hover:border-primary">
              <FaTwitter/>
            </div>
            <div className="inline-block rounded-full p-2 border border-secondary text-primary hover:text-white hover:bg-primary hover:border-primary">
              <FaInstagram/>
            </div>
          </div>
          <p className="text-xs md:text-[12px] text-light pt-8 md:pt-5">&copy; Copyright Ping. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
