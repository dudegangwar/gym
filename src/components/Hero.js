import React from 'react'

const Hero = () => {
  return (
    <div className='items-center justify-between bg-[#F2F3F7]'>
        <div className='px-[15%] py-[50px]'>
        <h1 className='text-center text-[72px] font-bold leading-[110%]'>Remove unwanted objects from your photos with AI</h1>
        <p className='text-center text-[20px] font-medium text-[#707176] px-[15%]'>The best free tool to clean up your pictures and remove any object, person, or watermark in 3 seconds. Easily delete undesired elements online from your image by painting over them.</p>
        </div>
        
        <div className='items-center justify-center border mx-[30%] py-[100px] bg-black opacity-20'>
            <button className='border bg-[#400CD8] text-white font-extralight p-2 rounded-lg hover:bg-gray-900'>Select a Picture</button>
            <p>Or Drop an Image</p>
        </div>

    </div>
  )
}

export default Hero