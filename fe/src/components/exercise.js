import React from 'react';
import Navbar from './navbar';
import { Row } from './table';
import { BsSearch } from "react-icons/bs";




const ExerciseType = ({type})=>{
  return(
   <button className="text-center mt-7  mx-auto w-full text-blue-200 text-lg px-2 rounded-sm  border-b border-sky-800 opacity-82 cursor-pointer block hover:bg-sky-800 active:bg-sky-800 focus:outline-none ">
    {type}
  </button>
  )
}

const SearchBar = ()=>{
    return(
     <div className='p-2 flex flex-row  justify-items-center max-w-xs sm:max-w-xs md:max-w-md md:justify-center lg:justify-center lg:max-w-xl mt-20 mx-auto border-solid border-2 border-blue-200 rounded-full  focus:ring-2 focus:ring-blue-400'>
       <BsSearch className='shrink mr-0 text-blue-200 text-3xl inline w-12 ml-5'/>
       <input type='text' className=' flex-auto w-32 mr-20  text-center text-lg focus:outline-none  bg-transparent placeholder:italic placeholder:text-blue-400 text-blue-200' placeholder="Search exercise.." />
     </div>
    )
}

       
       
const ExerciseDisplay = ()=>{
    return(
    <div className='w-screen h-screen overflow-hidden box-border  bg-gradient-to-b from-blue-900 to-sky-800'>
     <Navbar/>
     <SearchBar/>
     <ExerciseType type={"Back"}/>
     <ExerciseType type={"Triceps"}/>
     <ExerciseType type={"Shoulders"}/>
    </div>
    )
}


export default ExerciseDisplay;