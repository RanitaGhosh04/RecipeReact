import React from 'react'
import { useParams } from 'react-router-dom'

const ReceipeDetails = () => {
  const {idMeal} = useParams()
  return (
    <div>{idMeal}</div>
  )
}

export default ReceipeDetails