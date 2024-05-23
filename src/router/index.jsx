import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage'
import CategoryMeals from '../pages/CategoryMeals'
import ReceipeDetails from '../pages/ReceipeDetails'
import Header from "../components/Header";

const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meal/category/:category" element={<CategoryMeals />} />
        <Route path="/meal/:mealId" element={<ReceipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
