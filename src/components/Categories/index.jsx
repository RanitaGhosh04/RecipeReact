import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {getAllCategories} from'../../api'

const Categories = () => {
 
    const [categories, setCategories] = useState([])

    useEffect(() => {
     getAllCategories().then(setCategories).catch(console.log)
    }, [])

    return (
        <div>
            {categories.map(({strCategory,idCategory})=>
            <p key={idCategory}>{strCategory}</p>
            )}
        </div>
    )
    
}

export default Categories