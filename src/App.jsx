import React from 'react'
import ContactUs from './conponents/ContactUs'
import Success from './conponents/Success'

const App = () => {
  return (
    <div className="bg-green-100 flex items-center justify-center w-full  h-[950px]">
       <ContactUs/>
       {/* <Success/> */}
    </div>
  )
}

export default App