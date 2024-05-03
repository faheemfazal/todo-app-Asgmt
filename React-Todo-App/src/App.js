import React from 'react';
import TodoList from './components/TodoList';
import { MdCallToAction } from "react-icons/md";
import { IoTodaySharp } from "react-icons/io5";
import { BsCalendarWeekFill } from "react-icons/bs";
// import { Wave1} from './examples.js';

// import './App.css';


// const styles = {
//   fontFamily: 'sans-serif',
//   textAlign: 'center',
// };



function App() {
   return (
    <div className='flex flex-col justify-start h-screen w-screen py-12  px-28  pb-32 bg-[#121215]'>

     <div className='flex text-5xl font-semibold'>
      <h1 className="text-[#dedffa]">to</h1>
      <h1 className="text-[#7250d6]">do.</h1>
    </div>
      <div className='w-full h-full flex gap-4 mt-5 '>
        <div className='w-1/3 h-full rounded-lg bg-[#18181c] p-4 '>
          <h1 className='text-[#7250d6] text-2xl font-semibold pt-2'>Filters</h1>

          <div className='rounded-lg bg-[#302d36]  lext-lg mt-2  px-3 flex justify-start items-center gap-5 py-2'>
          <MdCallToAction  className='text-[#5a5969] text-lg'/>
            <p className='text-[#5a5969] text-lg'>All</p>

          </div>
          <div className='rounded-lg bg-[#302d36] #5a5969 lext-lg px-3 mt-2 flex justify-start items-center gap-5 py-2'>
          <IoTodaySharp  className='text-[#5a5969] text-lg'/>
            <p className='text-[#5a5969] text-lg'>Today</p>

          </div>

          <div className='rounded-lg bg-[#302d36] #5a5969 lext-lg px-3 mt-2 flex justify-start items-center gap-5 py-2'>
          <BsCalendarWeekFill  className='text-[#5a5969] text-lg'/>
            <p className='text-[#5a5969] text-lg'>Week</p>

          </div>


        </div>
        <div className='w-2/3 h-[600px] rounded-lg bg-[#18181c] p-4 overflow-auto scrollbar-hidden'>
 <TodoList />
        </div>




      </div>
      
      {/* <h1>Todo-app</h1>  */}
      {/* <Wave1/> */}

     
     
      {/* <TodoList /> */}

    </div>

  );
}


export default App;

