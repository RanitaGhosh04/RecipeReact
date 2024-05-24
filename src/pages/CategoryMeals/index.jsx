import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryMeals = () => {
  const {category} = useParams()
  return (
    <h1>{category}</h1>
  )
}

export default CategoryMeals