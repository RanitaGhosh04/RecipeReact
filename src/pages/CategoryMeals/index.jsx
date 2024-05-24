import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getMealsBasedOnCategories } from '../../api'

const CategoryMeals = () => {

  const navigate = useNavigate()
 
  const {category} = useParams()

  const [meals, setMeals] = useState([])
 
 
    useEffect(() => {
      getMealsBasedOnCategories(category).then(setMeals).catch(console.log())
    }, [])

    const onMealClick = (idMeal) => {
      navigate(`/meal/${idMeal}`)
    }

  return (
    <>
    <h1>Meals</h1>
    <div>
    {meals.map(({strMeal,idMeal})=>
    <p key={idMeal}
    onClick={()=> onMealClick(idMeal)}
    >
        {strMeal}
    </p>
    )}
</div>
</>
  )
}

export default CategoryMeals