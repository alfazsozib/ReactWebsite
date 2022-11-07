import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillMail, AiOutlineTwitter}  from "react-icons/ai"

function Footer() {
  return (
    <div>
        <footer className='grid grid-cols-3 p-12 items-center bg-[#0D0D0D] max-w-[1640px] h-[200px] text-white'>
            <div id="logo--sec">
                {/* <img src="" alt="" /> */}
                <h2>Logo</h2>
            </div>
            <div id="bio-sec">
                <span><p  className='w-3/4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ea distinctio eveniet dolores beatae doloribus ipsam debitis repudiandae, consequatur est.</p></span>              
            </div>
            <div className="social--icons ml-12 flex gap-6">
                <span className='text-[35px]'><AiOutlineTwitter /></span>
                <span className='text-[35px]'><AiFillLinkedin /></span>
                <span className='text-[35px]'><AiFillFacebook /></span>
                <span className='text-[35px]'><AiFillMail /></span>
            </div>
        </footer>      
    </div>
  )
}

export default Footer
