import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gray-800 p-4 z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Title (Optional) */}
        <div className="text-white text-xl">
          {/* <h1>Matrix</h1> */}
          <img src="title.png" className="w-48"></img>
        </div>

        {/* Links Container */}
        <div className="space-x-4">
          <NavLink
            to="/question"
            className={({ isActive }) =>
              `text-white hover:text-green-500 transition duration-300 ${
                isActive ? "!text-green-500 font-bold" : ""
              }`
            }
          >
            Game
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `text-white hover:text-green-500 transition duration-300 ${
                isActive ? "!text-green-500 font-bold" : ""
              }`
            }
          >
            Leaderboard
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
