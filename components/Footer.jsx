import React from 'react'

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="py-4 container mx-auto flex flex-col items-center justify-center text-center gap-4  md:flex-row">
        <p className="text-center">Copyright © Frontend Developer - María Castro - 2025 </p>
        <img src="./img/signature.png" alt="signature" width={100} className=" -mt-[0.5rem]"/>
      </div>
    </footer>
  )
}

export default Footer