import logoUrl from '../../assets/images/logo.svg'
import imgUrl from '../../assets/images/illustration-dashboard.png'

import './ComingSoon.css'

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center py-5"> 
      <div className="">  
        <img src={logoUrl} className=''/>
      </div>
      <h1 className="">We are launching soon!</h1>
      <p className="">Subscribe and get notified</p>
      <div className="">  
        <button className="">
          Notify Me
        </button>
      </div>
      <div className="">  
        <img src={imgUrl} className='max-w-full w-[640px]'/>
      </div>
    </div>
  )
}

export default ComingSoon
