import React from 'react'
import logo from '../images/logo.svg'

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-white p-2 px-[8%]'>
        <div>
            <img src={logo} alt='logo' />
        </div>
        <div>
            <ul className='flex space-x-5'>
            <button className='hover:border hover:bg-gray-200 text-black font-extralight rounded-lg p-2'>Features</button>
            <button className='hover:border hover:bg-gray-200 text-black font-extralight rounded-lg p-2'>Pricing</button>
            <button className='hover:border hover:bg-gray-200 text-black font-extralight rounded-lg p-2'>Resources</button>
            </ul>
        </div>
        <div className='space-x-1 justify-between align-center'>
            <button className='border bg-gray-200 text-black font-extralight p-2 rounded-lg hover:bg-gray-300'>Login</button>
            <button className='border bg-black text-white font-extralight p-2 rounded-lg hover:bg-gray-900'>Start creating</button>
        </div>
    </div>
  )
}

export default Header