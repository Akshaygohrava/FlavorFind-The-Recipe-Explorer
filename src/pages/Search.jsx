import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import { searchRecipes } from "../api";

export default function Search() {
  const [query, setQuery] = useState("chicken");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async () => {
    setLoading(true);
    const data = await searchRecipes(query);
    setRecipes(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-orange-500 text-center mb-6">Search Recipes</h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded-l-lg px-4 py-2 w-64 focus:outline-none"
        />
        <button type="submit" className="bg-orange-500 text-white px-4 rounded-r-lg hover:bg-orange-600 transition">
          Search
        </button>
      </form>

      {/* Recipes Grid */}
      {loading ? (
        <p className="text-center">Loading recipes...</p>
      ) : recipes.length === 0 ? (
        <p className="text-center text-gray-500">No recipes found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
