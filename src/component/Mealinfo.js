import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Mealinfo = () => {
    const {mealid} = useParams();
    const [info, setInfo] = useState()
    

    const getInfo = async () =>{
        const get =  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await get.json();
      //   console.log(jsonData.meals[0]);
        setInfo(jsonData.meals[0])
    }
    if(info !== ""){
        getInfo()
    }
  return (
   <>
     <div className=' h-screen  flex-col justify-center bg-sky-950 '>
        { !info ? "Data Not Found" : 
   <div className='mealInfo'> 
     <img className='h-80 w-59 rounded-2xl mx-auto  ' src={info.strMealThumb} alt='not com'/>
     <p className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold bg-black/60 px-4 py-2 rounded-2xl'>{info.strMeal}</p>
     <div className=''>
      <div className='text-center p-2'>
        <h1 className=' bg-green-800  text-align-center inline-block p-2 rounded-xl text-white'>Recipe Details</h1>
       </div>
        <h3 className='bg-green-800   text-white p-2 inline-block rounded-xl'>Intruction:-</h3>
        <p className='text-white p-2'>{info.strInstructions}</p>
     </div>
   </div>
    }
     </div>
     </>
  )
}

export default Mealinfo