import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMealDetails } from '../../api'

const ReceipeDetails = () => {
  const {idMeal} = useParams()
  const [mealDetails, setMealDetails] = useState({})
  useEffect(() => {
   getMealDetails(idMeal).then(setMealDetails).catch(console.log)
  }, [])
  
  return (
    <div>{JSON.stringify(mealDetails)}</div>
  )
}

export default ReceipeDetails