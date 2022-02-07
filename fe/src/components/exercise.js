import React, { useState, useEffect} from 'react';
import Navbar from './navbar';
import Input from './loginput';





const ExerciseType = ({type,exercises, childBtn,btn})=>{

  const [activity, handleActivities] = useState([])
  const [activityBtn, handleActivity] = useState(false)
  const [display, handleDisplay] = useState('block')
  const activity_array = []

  function handleActivitytype(e){
      exercises.map((exercise)=>{
        if(exercise.exercise === type){
          activity_array.push(exercise.activity)
        }
      })
      childBtn(true)
      console.log(e.target.value)
      return handleActivities(activity_array)
    }

  function handleActivitySubmit(e){
    console.log(e.target.value)
    handleDisplay('none')
    handleActivity(true)

  }

  return(
    <div>
    <input 
    onClick={handleActivitytype} 
    value={type} 
    type="button" 
    className="text-center mt-2  mx-auto w-full text-blue-200 text-lg px-2 rounded-sm border-b  border-sky-800 opacity-82 cursor-pointer block hover:bg-sky-800 active:bg-sky-800 focus:outline-none " style={{display:  type && btn !== true ?'block': 'none'}} />
    {
      activity.map((element,index)=>
      <input 
      key={index} 
      value={element} 
      onClick={handleActivitySubmit}
      type="button" 
      className="text-center mt-1 list-none mx-auto w-full text-blue-300 text-base px-2 rounded-sm  border-b border-sky-800 opacity-82 cursor-pointer block hover:bg-sky-900 active:bg-sky-800 focus:outline-none"
      style={{display: display}}
      />
      )
    }
     { activityBtn === true ? <Input/>  : null}
  </div>
  )
}



const TitleBar = ()=>{
    return(
       <p className='text-blue-200 text-2xl mt-5 border-b border-blue-300 text-center'>Log exercise routine</p>
       )
   }
  

 
const ExerciseDisplay = ()=>{

  const [exercises, handleExercises] = useState([])
  const [btn, handleBtn] = useState(false)


  useEffect(() => {
    
         function fetchData(){
             fetch("http://localhost:3002/exercises")
            .then((res)=> res.json())
            .then((data)=>  handleExercises(data.results))
           }
           fetchData()
        
    }, [])
    
   const new_array = []
   exercises.map((exercise)=>{
     new_array.push(exercise.exercise)
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
   <TitleBar/>
   {
     final_array.map((type,index)=>
     <div key={index}>
     <ExerciseType 
     type={type} 
     exercises={exercises} 
     btn={btn} 
     childBtn={childBtn}/>
       </div>       
     )
   }   
  </div>
  )
}

export default ExerciseDisplay;