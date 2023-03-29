import React, { useEffect, useState } from 'react';
import Mealcard from '../Mealcard/Mealcard';




const Meal = () => {
 const [meal,setmeal] =useState([]);
 const [ foodname,setfoodname]=useState([])
 useEffect(()=>{
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
  .then(res=>res.json()).then(data=>setmeal(data.meals));

 } ,[])

 
 function handelproduct(strMeal){
     setfoodname([...foodname, strMeal])
 };
// console.log(foodname)
     return (
          <div className=' container md:mx-auto grid md:grid-cols-5 gap-8'>
               
               <div className=' col-span-4 grid md:grid-cols-3 gap-8'>

             {
                meal.map(food=> <Mealcard meal={food} handelproduct ={handelproduct} key={food.idMeal}></Mealcard>)
             }

               </div >
               <div className='  col-span-1'>
                 <h1 className=' text-3xl font-bold my-6  text-center'> Product list</h1>
                  <div>
                    {
                         foodname.map(pro=>  <h1 className=' text-2xl font-bold my-4'>{pro}</h1> )
                    } 
                  </div>
               </div>
          </div>
     );
};

export default Meal;