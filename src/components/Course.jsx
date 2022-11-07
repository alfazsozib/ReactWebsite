import React from 'react'
import data from './cardData.js'
import ReactStars from "react-rating-stars-component";


const Course = () =>{

  var example = {
    size: 20,
    value: 5,
  };

  console.log(example.value);


  return (
        <div id='courses' className='max-w-[1640px] m-auto px-4 py-12'>
          <h1 className='text-center p-14 text-[#0CAC69] text-[40px] font-bold'>Courses</h1>
          <div  className='grid grid-cols-4 gap-10 py-10'>
            {data.map((item,index)=>
                <div className='p-5 border-2 shadow-lg hover:scale-110 duration-300 border-slate-200'>
                    <img src={item.img} alt={item.name} className="w-[100%] h-[150px] object-cover" />
                    <h2 className='mt-5 text-sm font-bold'>{item.name}</h2>
                    <div id='stars' className='flex gap-2 items-center' >
                      <span><ReactStars {...example}/></span>
                      <span className='text-[15px] text-[#585859]'>({item.stars})</span>
                    </div>
                    <div className="price-sec flex justify-between mt-5">
                        <span className='font-bold'>${item.price}</span>
                        <button className='bg-[#0CAC69] rounded-xl p-[2px] text-sm px-4 font-semibold text-white'>Enroll Now</button>
                    </div>  
                </div>            
            )}
          </div>
        </div>
      );
      
}

export default Course
