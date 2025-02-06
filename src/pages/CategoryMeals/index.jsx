import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMealsBasedOnCategories } from '../../api';
import { Heart } from 'lucide-react';
import { toggleFavorite } from '../../redux_setup/action/favoriteActions';

const CategoryMeals = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favoriteMeals);

  useEffect(() => {
    getMealsBasedOnCategories(category).then(setMeals).catch(console.log);
  }, [category]);

  const onMealClick = (idMeal) => {
    navigate(`/meal/${idMeal}`);
  };

  const handleToggleFavorite = (e, meal) => {
    e.stopPropagation();
    dispatch(toggleFavorite(meal));
  };

  const isFavorite = (mealId) => {
    return favorites.some(meal => meal.idMeal === mealId);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        {category} Meals
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            onClick={() => onMealClick(meal.idMeal)}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="aspect-square overflow-hidden relative">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <button
                onClick={(e) => handleToggleFavorite(e, meal)}
                className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors duration-300"
              >
                <Heart
                  className={`w-5 h-5 transition-colors duration-300 ${
                    isFavorite(meal.idMeal) ? 'fill-red-500 stroke-red-500' : 'stroke-gray-600'
                  }`}
                />
              </button>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                {meal.strMeal}
              </h2>
            </div>
          </div>
        ))}
      </div>
      {meals.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">Loading meals...</p>
        </div>
      )}
    </div>
  );
};

export default CategoryMeals;