import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row  justify-between items-start '>
        <div className='w-full md:w-1/3 flex-shrink-0 ' >
             <div className="flex h-16 items-center overflow-hidden">
              <img
                src={assets.logomer}
                alt="Luxora-Homes"
                className="h-38 w-auto object-contain"
              />
            </div>
        <p className='text-gray-400 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam quasi
            voluptate, doloremque corporis deleniti consequatur sed cumque, magnam
</p>
        </div>
        <div className='w-full md:w-1/5 flex-shrink-0' >
        <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
        <ul className='flex flex-col gap-2 text-gray-400'>
          <a href="#Header" className='text-gray-400 hover:text-white'>Home</a>
          <a href="#About" className='text-gray-400 hover:text-white'>About Us</a>
          <a href="#Contact" className='text-gray-400 hover:text-white'>Contact Us</a>
          <a href="#" className='text-gray-400 hover:text-white'>Privacy Policy</a>
        </ul>
        </div>
       < div className='w-full md:w-1/3 flex-shrink-0 ' >
       <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
       <p className='text-gray-400 mb-4 max-w-80'>Stay updated with our latest news and offers.</p>
       <div className='flex gap-2'>
        <input type="email" placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-gray-400  border border-gray-700 focus:outline-none w-full md:w-auto' />
        <button className='bg-blue-600 text-white py-3 px-4 rounded'>Subscribe</button>     
       </div>
       </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        <p>&copy; 2026 Luxora Homes. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer