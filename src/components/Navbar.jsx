import React from 'react'

function Navbar() {
  return (
    <div className='flex p-8 justify-end mr-10'>
        <section className='flex'>
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
