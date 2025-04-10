import React, { useState } from 'react'
import Mealcards from './Mealcards';
import { UNSAFE_useFogOFWarDiscovery } from 'react-router-dom';


const Mainpage = () => {
    const [data,setData]  =useState();
    const [search, setSearch] = useState("");
    const [msg, setMsg] = useState("")

    const handleInput = (event) =>{
        setSearch(event.target.value)
    }
    const myFun = async () =>{
        if(search === ""){
            setMsg("Please Enter Something")
        }else{
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData = await get.json();
         console.log(jsonData.meals);
        setData(jsonData.meals)
        console.log("your data",data);
        setMsg("")
        
        }
         
    }
    
    console.log("your data",data);
  return (
    <>
        <div class='h-full  bg-orange-500 m-10 p-12 rounded-xl'> 
        <p className=' h-100vh text-black  text-center p-12px  font-bold text-2xl'>You dont know how to make the dish you <br></br>have in mind?</p>
        <p className=' text-black font-semibold text-xl'>Feed your imagination and spark your creativity. From cravings to creations, let your ideas flourish and uncover the 
            perfect recipe waiting to be discovered.</p>
        <div className='h-full '>
            <div className='text-center   h-19px '>
                <input  className='bg-black h-12 rounded-xl placeholder-white  text-white p-5 m-8' type='text' placeholder='Enter Dishes Name' onChange={handleInput}/>
                <button className=' bg-blue-500 w-52 h-10 rounded-full' onClick={myFun}>Search</button>
            </div>
            <h4 className='msg'>{msg}</h4>
            
        </div>
        </div>
           <div>
            <Mealcards detail={data}/>
            </div>
    </>
  )
}

export default Mainpage