import React from 'react'
import heroImg from "../assets/image/Frame.png";

function Hero() {
  return (
    <div id='hero' className='flex p-8 py-12'>
      <div id="text-container" className='w-[50%]' >
        <div className='bold--box'>
            <h1 className='text-[70px] leading-[48px] font-bold'>Welcome to the</h1>
            <h1 className='text-[70px] font-bold'>
            best <span className='text-[#0CAC69]'> E-Learning</span>
            </h1>
            <h1 className='text-[70px] font-bold leading-[48px]'>Platform</h1>
        </div>
        <p className='mt-10 text-[#9B9898]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum sint
          dolore nobis maiores minus soluta corrupti dolorem quos voluptate.
          Labore, voluptates. Minima quod expedita quidem cum? Tempora atque,
          tempore dolores vitae debitis consequatur harum minima nostrum
          impedit, hic corrupti. Maiores commodi ut molestiae optio veritatis
          perspiciatis blanditiis dolorem dolore?
        </p>
      </div>
      <div id='hero--image' className='w-[50%]'>
        <img src={heroImg} alt="" srcset="" />
      </div>
    </div>
  )
}

export default Hero
