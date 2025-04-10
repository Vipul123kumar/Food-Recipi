import React from 'react'
 import { NavLink } from 'react-router-dom';

const Mealcards = ({detail}) => {
    
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-sky-950 font-semibold '>
        {!detail ? "Enter Valid Dish Name" : detail.map((curItem)=>{
            return (
              <>
                <div className='relative h-full  flex-col justify-center '>
                  <img className='h-80 w-59 rounded-2xl mx-auto  ' src={curItem.strMealThumb} alt='not coming'/>
                  <p className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold bg-black/60 px-4 py-2 rounded-2xl'>{curItem.strMeal}</p>
                  </div>
                 
                  <NavLink to={`/${curItem.idMeal}`}>
                  <button className='h-30 w-50 bg-blue-500 p-3 m-4 rounded-2xl'>Recipe</button>
                  </NavLink>
                   
                
                </>
            )
        }) 
         
        }
    </div>
  )
}

export default Mealcards