import axios from "axios";

const API_BASE = "https://www.themealdb.com/api/json/v1/1";

// Search recipes by name
export const searchRecipes = async (query) => {
  try {
    const res = await axios.get(`${API_BASE}/search.php?s=${query}`);
    return res.data.meals || [];
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

// Get recipe by ID
export const getRecipeById = async (id) => {
  try {
    const res = await axios.get(`${API_BASE}/lookup.php?i=${id}`);
    return res.data.meals ? res.data.meals[0] : null;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    return null;
  }
};
