import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {getAllCategories} from'../../api'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
 
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
     getAllCategories().then(setCategories).catch(console.log)
    }, [])

    const onCategoryClick = (category) =>{
        navigate(`/meal/category/${category}`)
    }

    return (
        <div>
            <h1>Categories</h1>
            {categories.map(({strCategory,idCategory})=>
            <p key={idCategory}
            onClick={()=> onCategoryClick(strCategory)}
            >
                {strCategory}
            </p>
            )}
        </div>
    )
    
}

export default Categories