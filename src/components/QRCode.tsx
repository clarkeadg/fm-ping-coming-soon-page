import imgUrl from '../assets/image-qr-code.png'

const QRCode = () => {
  return (
    <div className="bg-white max-w-[320px] rounded-3xl overflow-hidden shadow-lg p-4 text-center">
      <div className="rounded-xl overflow-hidden">
        <img className="w-full" src={imgUrl} alt="QR Code"/>
      </div>      
      <div className="px-4 py-6">
        <h1 className="text-dark font-bold text-2xl leading-tight mb-4">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-light leading-tight">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  )
}

export default QRCode
