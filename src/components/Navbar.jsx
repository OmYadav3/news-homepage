import React from 'react'
import logo from '/logo.svg'

const Navbar = () => {

  return (
    <div>
      <din className="nav flex justify-center gap-[40rem] my-14  ">
        <div className="logo"><img src={logo} alt="image not found" /></div>
        <div>
        <ul className='flex gap-12 opacity-80 '>
            <li className='hover:text-yellow-500'>Home</li>
            <li className='hover:text-yellow-500'>News</li>
            <li className='hover:text-yellow-500'>Popular</li>
            <li className='hover:text-yellow-500'>Trending</li>
            <li className='hover:text-yellow-500'>Categories</li>
        </ul>
        </div>
      </din>
    </div>
  )
}

export default Navbar
