import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllCategories } from '../../api';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories().then(setCategories).catch(console.log);
  }, []);

  const onCategoryClick = (category) => {
    navigate(`/meal/category/${category}`);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map(({ strCategory, idCategory, strCategoryThumb, strCategoryDescription }) => (
          <div
            key={idCategory}
            onClick={() => onCategoryClick(strCategory)}
            className="cursor-pointer group hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden bg-white flex flex-col h-full"
          >
            <div className="aspect-square overflow-hidden relative">
              <img
                src={strCategoryThumb}
                alt={strCategory}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">{strCategory}</h2>
              <p className="text-sm text-gray-600 line-clamp-3">
                {strCategoryDescription}
              </p>
              <div className="mt-auto pt-3">
                <span className="text-sm text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                  View Recipes →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
