import React from "react";
import Navbar from './navbar';
import {Table} from './table';


const Addbutton =()=>{
    return(
        <>
        <button className="text-blue-200 bg-sky-800 opacity-75 rounded-full w-16 h-16 text-4xl cursor-pointer my-8 mx-auto block">
         +
        </button>
        <p className="text-blue-200 text-center p-0 m-0">Start new work out</p>
        </>
    )
 }

const Home =()=>{
    return(
        <div className='w-screen h-screen overflow-hidden box-border  bg-gradient-to-b from-blue-900 to-sky-800'>
            <Navbar/>
            <Table/>
            <Table/>
           <Addbutton/>

        </div>
    )

}

export default Home;
  