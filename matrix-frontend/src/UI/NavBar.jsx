import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Title (Optional) */}
        <div className="text-white text-xl">
          <h1>Matrix</h1>
        </div>

        {/* Links Container */}
        <div className="space-x-4">
          <NavLink
            to="/question"
            className={({ isActive }) =>
              `text-white hover:text-green-500 transition duration-300 ${
                isActive ? "text-green-500 font-bold" : ""
              }`
            }
          >
            Game
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `text-white hover:text-green-500 transition duration-300 ${
                isActive ? "text-green-500 font-bold" : ""
              }`
            }
          >
            Dashboard
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
