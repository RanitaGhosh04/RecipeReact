import axios from 'axios'

const api = axios.create({
    baseURL:'https://www.themealdb.com/api/json/v1/1/'
})

const getAllCategories = async()=>{
    try{
        const {data} = api.get('/categories.php')
        return data
    }
    catch(e){
        console.log(e)
        throw new Error(e.message)
    }
}

const search = async(searchKey)=>{
    try{
        const {data} = api.get(`/search.php?=${searchKey}`)
        return data
    }
    catch(e){
        console.log(e)
        throw new Error(e.message)
    }
}


const getMealsBasedOnCategories = async(categoryName)=>{
    try{
        const {data} = api.get(`/filter.php?c=${categoryName}`)
        return data
    }
    catch(e){
        console.log(e)
        throw new Error(e.message)
    }
}


const getMealDetails = async(mealId)=>{
    try{
        const {data} = api.get(`lookup.php?i=${mealId}`)
        return data
    }
    catch(e){
        console.log(e)
        throw new Error(e.message)
    }
}

export {
    getAllCategories,
    getMealsBasedOnCategories,
    getMealDetails,
    search
}