import { useParams } from "react-router-dom";

export default function RecipeDetails() {
  const { id } = useParams();
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-semibold text-orange-500">Recipe Details</h1>
      <p className="text-gray-600 mt-2">Details for recipe ID: {id}</p>
    </div>
  );
}
