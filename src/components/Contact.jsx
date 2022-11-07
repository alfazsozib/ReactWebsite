import React from 'react'

function Contact() {
  return (
    <div id='contact' className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-center text-[45px] text-[#0CAC69] font-bold p-12'>Get in Touch</h1>
        <div className='flex justify-center'>
        <div id="form--section" className='w-3/4 flex flex-col relative rounded-3xl bg-[#3cae7c3e] p-5'>
            <input className='p-3 m-2 rounded-lg' type="text" placeholder='Name' />
            <input className='p-3 m-2 rounded-lg' type="email" placeholder='Email'/>
            <textarea className='p-3 m-2 rounded-lg' name="Message" cols="5" rows="5" placeholder='Message'></textarea>
            <div id='btn' className='flex justify-end mr-2'>
            <button className='px-14 p-2 rounded-3xl bg-[#4dac82] hover:bg-[#0CAC69] text-white'>Submit</button>
            </div>
           {/* //absolute bottom-2 right-14 */}
        </div>
        </div>
    </div>
  )
}

export default Contact
