import React from 'react'
import Navbar from '../components/Navbar'

function HomeLayout({ children }) {
    console.log(children);
  return (
    <div className='w-full h-full'>
      <Navbar />
      <div>{children}</div>
    </div>
  )
}

export default HomeLayout