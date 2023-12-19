import logoUrl from '../../assets/images/logo.svg'
import imgUrl from '../../assets/images/illustration-dashboard.png'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

import './ComingSoon.css'

const ComingSoon = () => {
  return (
    <div className="font-light relative flex flex-col items-center pb-32"> 
      <div className="py-4 mb-8">  
        <img src={logoUrl} className=''/>
      </div>
      <h1 className="text-light text-4xl">We are launching <span className="text-dark font-bold">soon!</span></h1>
      <p className="text-dark text-xl py-4">Subscribe and get notified</p>
      <div className="flex items-center py-4 mb-8 gap-4">  
        <div className="h-12">
          <input 
            className="border border-gray-300 px-6 w-72 h-full rounded-full overflow-hidden"
            placeholder="Your email address..."
          />
        </div>
        <button className="font-semibold bg-blue-500 rounded-full text-white px-12 py-3">
          Notify Me
        </button>
      </div>
      <div className="py-4">  
        <img src={imgUrl} className='max-w-full w-[640px]'/>
      </div>
      <div className="absolute bottom-0 flex justify-center items-end w-full h-32 text-center">
        <div className="text-xs">
          <div className="flex justify-center gap-3">  
            <a href="#" className="inline-block rounded-full p-2 border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500">
              <FaFacebookF/>
            </a>
            <a href="#" className="inline-block rounded-full p-2 border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500">
              <FaTwitter/>
            </a>
            <a href="#" className="inline-block rounded-full p-2 border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500">
              <FaInstagram/>
            </a>
          </div>
          <p className="text-gray-400 py-4">&copy; Copyright Ping. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
