import React, { useState, useEffect} from 'react';
import Navbar from './navbar';
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";





const ExerciseType = ({type,exercises, childBtn,btn})=>{

  const [activity, handleActivities] = useState([])
  const activity_array = []

  function handleActivitytype(){
      exercises.map((exercise)=>{
        if(exercise.Exercise === type){
          activity_array.push(exercise.Activity)
        }
      })
      childBtn(true)
      return handleActivities(activity_array)

  }

  return(
    <div>
    <input onClick={handleActivitytype} value={type} type="button" className="text-center mt-7  mx-auto w-full text-blue-200 text-lg px-2 rounded-sm border-double border-4  border-sky-800 opacity-82 cursor-pointer block hover:bg-sky-800 active:bg-sky-800 focus:outline-none " style={{visibility:  type && btn !== true ?'visible': 'hidden'}} />
    {
      activity.map((element,index)=>
      <input key={index} value={`${type}- ${element}`} type="button" className="text-center mt-1 list-none mx-auto w-full text-blue-300 text-base px-2 rounded-sm  border-b border-sky-800 opacity-82 cursor-pointer block hover:bg-sky-900 active:bg-sky-800 focus:outline-none "/>
      )
    }
  </div>
  )
}



const SearchBar = ()=>{
    return(
     <div className='p-2 flex flex-row  justify-items-center max-w-xs sm:max-w-xs md:max-w-md md:justify-center lg:justify-center lg:max-w-xl mt-20 mx-auto border-solid border-2 border-blue-200 rounded-full  focus:ring-2 focus:ring-blue-400'>
       <BsSearch className='shrink mr-0 text-blue-200 text-3xl inline w-12 ml-5'/>
       <p className='text-blue-200 text-3xl'>Choose form exercises</p>
       {/* <input type='text' className=' flex-auto w-32 mr-20  text-center text-lg focus:outline-none  bg-transparent placeholder:italic placeholder:text-blue-400 text-blue-200' placeholder="Search exercise.." /> */}
     </div>
    )
}

 
const ExerciseDisplay = ()=>{

  const [exercises, handleExercises] = useState([])
  const [btn, handleBtn] = useState(false)


  useEffect(() => {
    
         function fetchData(){
             fetch("http://localhost:9000/")
            .then((res)=> res.json())
            .then((data)=>  handleExercises(data))
           }
    
     fetchData()
  
 }, [])


   const new_array = []
   exercises.map((exercise)=>{
     new_array.push(exercise.Exercise)
   })

   let first_occurence = false
   let final_array = []
   for(let i=0;i<new_array.length-1;i++){
        if(new_array[i] === new_array[i + 1]  && first_occurence === false){
            first_occurence = true
            final_array.push(new_array[i])
          }

          else if (new_array[i] !== new_array[i + 1]){
                final_array.push(new_array[i + 1])
          }
          
  }

  function childBtn(btn){
    handleBtn(btn)

  }

  return(
  <div className='w-screen h-screen overflow-hidden box-border  bg-gradient-to-b from-blue-900 to-sky-800'>
   <Navbar/>
   <SearchBar/>
   {
     final_array.map((type,index)=>
     <div key={index}>
     <ExerciseType type={type} exercises={exercises} btn={btn} childBtn={childBtn}/>
       </div>       
     )
   }   
     <button  className="text-blue-200 bg-sky-800 opacity-85 hover:bg-sky-700 rounded-full w-16 h-16 text-2xl cursor-pointer my-8 mx-auto block">
        <Link to='/log-entry'>Next</Link>
      </button>
  </div>
  )
}

export default ExerciseDisplay;