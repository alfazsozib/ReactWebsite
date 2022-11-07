import React from 'react'

function Contact() {
  return (
    <div id='contact' className='max-w-[1640px] my-12'>
        <h1 className='text-center text-[45px] text-[#0CAC69] font-bold p-12'>Get in Touch</h1>
        <div id="form--section" className='flex flex-col relative rounded-3xl bg-[#3cae7c3e] p-12 mx-4'>
            <input className='p-4 m-2 rounded-lg' type="text" placeholder='Name' />
            <input className='p-4 m-2 rounded-lg' type="email" placeholder='Email'/>
            <textarea className='p-4 m-2 rounded-lg' name="Message" cols="10" rows="10" placeholder='Message'></textarea>
            <div id='btn' className='flex justify-end mr-2'>
            <button className='px-14 p-2 rounded-3xl bg-[#4dac82] hover:bg-[#0CAC69] text-white'>Submit</button>
            </div>
           {/* //absolute bottom-2 right-14 */}
        </div>
    </div>
  )
}

export default Contact
