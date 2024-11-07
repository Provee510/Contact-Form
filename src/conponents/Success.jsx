import React from 'react'
import success from '../assets/icons/icon-success-check.svg'

const Success = () => {
  return (
    <div className="bg-green-950 h-32 w-[450px] rounded-xl ">
        <div className="check flex gap-4 p-7">
            <img src={success} alt="" />
            <h1 className="text-gray-300 text-xl font-normal">Message Sent!</h1>
        </div>
        <div className="relative bottom-5 left-6">
            <p className="text-gray-400">Thanks for completing the form. We'll be in touch soon!</p>
        </div>
        
    </div>
  )
}

export default Success