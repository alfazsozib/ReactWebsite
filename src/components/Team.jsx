import React from 'react'
import teamData from "./teamData.js"
import { AiFillLinkedin, AiOutlineTwitter}  from "react-icons/ai"



function Team() {
  return (
    <div id='teams' className='max-w-[1640px] m-auto pb-12 px-4'>
        <h1 className='text-center text-[45px] font-bold text-[#0CAC69] py-12 mb-20'>Meet The Team</h1>
        <div className='grid grid-cols-4 pt-16 '>
            {teamData.map((item,index)=>
                <div key={index} className="shadow-gray-500 shadow-lg hover:scale-110 duration-300 relative border-[#0CAC69] rounded-3xl border-2 h-[350px] px-2 mx-3 text-center">
                    <img className='w-[150px] object-cover border-[#139b62ba] mx-auto top-[-80px] left-16 absolute border-[12px] border-gradient-br-blue-green-gray-900 rounded-full h-[150px]' src={item.pimg} alt={item.pname}/>
                    <div className=' mt-[100px]'>
                        <h2 className='text-[28px] font-bold'>{item.pname}</h2>
                        <p className='text-[#0CAC69] font-bold'>{item.subt}</p>
                        <div className='flex gap-2 justify-center mt-3'>
                           <span className='text-[30px] text-[#0CAC69]'><a href="http://twitter.com/"><AiOutlineTwitter /></a></span>
                           <span className='text-[30px] text-[#0CAC69]'><a href="http://linkedin.com/"><AiFillLinkedin /></a></span>
                            
                        </div>     
                        <p className='text-[#9B9898] mt-5'>{item.bio}</p>
                    </div>
                                   
                </div>
            )}
        </div>
    
    </div>
  )
}

export default Team
