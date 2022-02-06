import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Navbar from '../components/navbar';
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";



const CalendarDisplay = () =>{
    const date = new Date().toLocaleDateString()
    const [value, onChange] = useState(date);
   
    // function handleChange(){
    //     onChange()
    // }
  return (
   <div className="w-screen h-screen overflow-hidden box-border  bg-gradient-to-b from-blue-900 to-sky-800">
       <Navbar/>
       <h1 className='text-blue-200 text-center text-xl pt-10 border-b border-sky-800'>Calendar</h1>
       <Calendar
       className='text-blue-200 mt-10 p-5 no-underline text-xl border rounded-sm border-blue-200 mx-4 cursor-pointer bg-gradient-to-b from-sky-800 to-sky-700 opacity-82'
       nextLabel={<BsArrowRightCircle style={{margin: '0 0 -3px 5px'}}/>}
       next2Label={null}
       prev2Label={null}
       prevLabel = {<BsArrowLeftCircle style={{margin: '0 5px -3px 0px'}} />}
       showNavigation={true}
    //    onChange={onChange}
    //    value = {value}
       />
        <div className='text-blue-200'>{value}</div> 
   </div>
  ) 
}

export default CalendarDisplay;