import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMealDetails } from '../../api';
import { PlayCircle, Heart } from 'lucide-react';
import { toggleFavorite } from '../../redux_setup/action/favoriteActions';

const RecipeDetails = () => {
  const { idMeal } = useParams();
  const [mealDetails, setMealDetails] = useState({});
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favoriteMeals);

  useEffect(() => {
    getMealDetails(idMeal).then(setMealDetails).catch(console.log);
  }, [idMeal]);

  const isFavorite = () => {
    return favorites.some(meal => meal.idMeal === idMeal);
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(mealDetails));
  };

  const getYoutubeId = (url) => {
    if (!url) return null;
    const regExp = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^/]+\/\S+\/|(?:v|e(?:mbed)?)\/)([A-Za-z0-9_-]+)|(?:https?:\/\/(?:www\.)?youtu\.be\/)([A-Za-z0-9_-]+))/;
    const match = url.match(regExp);
    return match ? match[1] || match[2] : null;
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 relative">
          
          <button
            onClick={handleToggleFavorite}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors duration-300"
          >
            <Heart
              className={`w-6 h-6 transition-colors duration-300 ${
                isFavorite() ? 'fill-red-500 stroke-red-500' : 'stroke-gray-600'
              }`}
            />
          </button>

          
          {mealDetails.strMealThumb && (
            <div className="mb-6">
              <img
                src={mealDetails.strMealThumb}
                alt={mealDetails.strMeal}
                className="w-full rounded-lg shadow-md"
              />
            </div>
          )}

          <h1 className="text-3xl font-bold mb-6">{mealDetails.strMeal}</h1>

          
          {mealDetails.strYoutube && (
            <a
              href={mealDetails.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              <PlayCircle className="w-5 h-5" />
              Watch Video Tutorial
            </a>
          )}

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Instructions</h2>
            {mealDetails.strInstructions?.split('\n').map((instruction, index) => (
              instruction.trim() && (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {instruction}
                </p>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
