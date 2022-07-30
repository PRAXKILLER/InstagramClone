import React from 'react'

function WaitingPage() {

    if(localStorage.instaUser)
    window.location.href = 'http://localhost:3000/home'
    else
    window.location.href = 'http://localhost:3000/login'
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className='h-60 w-60 flex justify-center items-center'>
            <img  src="https://img.freepik.com/premium-photo/rusty-instagram-icon-floor_594168-3.jpg" alt="Instagram" className='w-full h-auto'/>
        </div>
    </div>
  )
}

export default WaitingPage
