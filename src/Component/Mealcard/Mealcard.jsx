import React from 'react';
import './Mealcard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Mealcard = (propos) => {
     
     const {strMealThumb, strTags, strMeal}=propos.meal;

  const hendelfood=propos.handelproduct;

     return (
      <div className=' relative cardwidth  border-2 border-blue-200 '>
       <div className=' p-2 relative'>
          
      <img src={strMealThumb} alt="" /> 
      <div>
      <h1 className=' text-xl text-black font-bold py-2'> {strMeal?strMeal : "fash food"}</h1>    
       <h1 className=' text-lg text-black font-semibold pt-2'> {strTags} </h1>
     
        </div>
     </div>  
     <button onClick={()=> hendelfood(strMeal)} className=' w-full   absolute bottom-0  text-xl font-bold text-black bg-[#fca504ce]  p-2 '> Add To Card <FontAwesomeIcon icon={faShoppingCart} /></button>

      </div>
     );
};

export default Mealcard;