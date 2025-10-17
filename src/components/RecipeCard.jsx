import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.idMeal}`}>
      <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="font-bold text-lg text-orange-500">{recipe.strMeal}</h2>
          <p className="text-gray-600 mt-2 text-sm">{recipe.strArea} • {recipe.strCategory}</p>
        </div>
      </div>
    </Link>
  );
}
