import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useTourGuide from "../hooks/useTourGuide";
import logo from "../../src/assets/DALL·E 2024-12-10 02.30.58 - A modern and elegant logo design for a travel website named 'TravelBloom'. The logo features a blooming flower intertwined with a world globe, symboli.webp";
import { ThemeContext } from "../Provider/ThemeProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { darkMode, toggleDarkMode  } = useContext(ThemeContext);
  const [isAdmin] = useAdmin();
  const [isTourGuide] = useTourGuide();

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-black text-[#ffcd00] rounded-md font-sans text-lg"
              : "font-sans text-lg text-green-500"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-black text-[#ffcd00] rounded-md font-sans text-lg"
              : "font-sans text-lg text-green-500"
          }
          to="/assignments"
        >
          Community
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-black text-[#ffcd00] rounded-md font-sans text-lg"
              : "font-sans text-lg text-green-500"
          }
          to="/assignments"
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-black text-[#ffcd00] rounded-md font-sans text-lg"
              : "font-sans text-lg text-green-500"
          }
          to="/assignments"
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-black text-[#ffcd00] rounded-md font-sans text-lg"
              : "font-sans text-lg text-green-500"
          }
          to="/assignments"
        >
          Contact Us
        </NavLink>
      </li>

      {user?.email ? (
        <></>
      ) : (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-black text-[#ffcd00] rounded-md font-sans text-lg"
                  : "font-sans text-lg text-green-500"
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-black text-[#ffcd00] rounded-md font-sans text-lg"
                  : "font-sans text-lg text-green-500"
              }
              to="/register"
            >
              Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleLogOut = () => {
    logOut().then(() => {
      console.log("logout success");
    }).catch(error => {
      console.error(error);
    });
  };

  return (
    <div className="navbar sticky md:static top-0 z-50 bg-gradient-to-r from-teal-100 via-sky-50 to-lime-50 mx-auto dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-600 dark:to-gray-500 dark:text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <img className="md:w-[40px] w-[30px]" src={logo} alt="" />
        <Link to={"/"}>
          <button className="btn btn-ghost text-xl text-green-500 dark:text-yellow-400 -translate-x-3">TravelBloom</button>
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button
          onClick={toggleDarkMode}
          className="p-2 md:mr-4 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        {user ? (
          <>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img src={user?.photoURL} alt="" />
                  ) : (
                    <img alt="" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  )}
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-55 right-0 bg-[#f8f3f0] text-center dark:bg-gray-800 dark:text-white">
                <li className="uppercase text-green-500">{user?.displayName}</li>
                <li className="uppercase text-green-500">{user?.email}</li>
                {user && isAdmin && <li><Link to="/dashboard/adminProfile">Dashboard</Link></li>}
                {user && isTourGuide && <li><Link to="/dashboard/tourGuideProfile">Dashboard</Link></li>}
                {user && !isAdmin && !isTourGuide && (
                  <li><Link to="/dashboard/userProfile">Dashboard</Link></li>
                )}
                <li className="text-green-500 rounded-lg mx-auto"><Link to="/my-assignment">Offer Announcement</Link></li>
                <li onClick={handleLogOut} className="btn text-green-500 rounded-lg mx-auto">Sign Out</li>
              </ul>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;
