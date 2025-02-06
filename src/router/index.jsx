import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage'
import CategoryMeals from '../pages/CategoryMeals'
import ReceipeDetails from '../pages/ReceipeDetails'
import Header from "../components/Header";
import FavoritePage from "../pages/FavoritePage";
import store from '../redux_setup/store/index'
import { Provider } from "react-redux";

const Router = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meal/category/:category" element={<CategoryMeals />} />
        <Route path="/meal/:idMeal" element={<ReceipeDetails />}/>
        <Route path="/favorites" element={<FavoritePage/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
};

export default Router;
