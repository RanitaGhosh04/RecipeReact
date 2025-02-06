import { TOGGLE_FAVORITE } from './types';

export const toggleFavorite = (meal) => ({
  type: TOGGLE_FAVORITE,
  payload: meal
});
