import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-orange-500">
        FlavorFind
      </Link>
      <div className="space-x-6">
        {["/", "/search", "/favorites"].map((path, i) => {
          const names = ["Home", "Search", "Favorites"];
          return (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-gray-700 font-medium hover:text-orange-500 transition ${
                  isActive ? "text-orange-500 underline" : ""
                }`
              }
            >
              {names[i]}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
