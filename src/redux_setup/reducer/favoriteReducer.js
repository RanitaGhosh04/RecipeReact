import { TOGGLE_FAVORITE } from '../action/types';

const initialState = {
  favoriteMeals: []
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const exists = state.favoriteMeals.some(meal => meal.idMeal === action.payload.idMeal);
      return {
        ...state,
        favoriteMeals: exists
          ? state.favoriteMeals.filter(meal => meal.idMeal !== action.payload.idMeal)
          : [...state.favoriteMeals, action.payload]
      };
    default:
      return state;
  }
};

export default favoriteReducer;