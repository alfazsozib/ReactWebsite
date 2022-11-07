import React from 'react'

function Navbar() {
  return (
    <div className='max-w-[1640px] m-auto mb-3'>
        <section className='flex justify-end py-8 px-20'>
            <div id="nav">
              <ul className='flex gap-10'>
                <li className='font-bold'><a href="/">Home</a></li>
                <li className='font-semibold'><a href="#courses">Courses</a></li>
                <li className='font-semibold'><a href="#teams">Team</a></li>
                <li className='font-semibold'><a href="#contact">Contact</a></li>
              </ul>
            </div>
        </section>
    </div>
  )
}

export default Navbar
