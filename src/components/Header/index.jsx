import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { search } from '../../api';
import { Search, Heart } from 'lucide-react';

const Header = () => {
  const [searchKey, setSearchKey] = useState('');
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();
  const location = useLocation(); 

  const onSearchClick = () => {
    if (!searchKey.trim()) return;
    navigate('/');
    search(searchKey).then(setMeals).catch(console.log);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearchClick();
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchKey(value);
    if (!value.trim()) {
      setMeals([]);
    }
  };

  const renderMealsSection = () => {
    if (meals.length === 0 || location.pathname !== '/') return null;

    return (
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Search Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {meals.map(({ strMeal, idMeal, strMealThumb }) => (
            <div
              key={idMeal}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate(`/meal/${idMeal}`)}
            >
              {strMealThumb && (
                <div className="aspect-video">
                  <img
                    src={strMealThumb}
                    alt={strMeal}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800">{strMeal}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <h1 
              onClick={() => navigate('/')} 
              className="text-2xl font-bold text-white cursor-pointer"
            >
              Recipe App
            </h1>
            <button
              onClick={() => navigate('/favorites')}
              className="flex items-center gap-2 text-white hover:text-blue-100 transition-colors duration-300"
            >
              <Heart className="w-5 h-5" />
              <span className="font-medium">Favorites</span>
            </button>
          </div>
          <div className="flex gap-2 w-full max-w-md">
            <div className="relative flex-1">
              <input
                type="search"
                placeholder="Search for recipes..."
                value={searchKey}
                onChange={handleSearchChange}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-2 rounded-lg border-2 border-transparent focus:border-blue-300 focus:outline-none text-sm"
              />
            </div>
            <button
              onClick={onSearchClick}
              className="bg-white p-2 rounded-lg hover:bg-blue-50 transition-colors duration-300"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-blue-500" />
            </button>
          </div>
        </div>
      </div>
      {renderMealsSection()}
    </div>
  );
};

export default Header;