import React, { useContext } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaXing } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeProvider";

const Navbar = () => {
  const { theme, toogleTheme } = useContext(ThemeContext);

  const menuItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
    </>
  );

  const themeMenu = (
    <div onClick={toogleTheme}>{theme ? <MdLightMode /> : <MdDarkMode />}</div>
  );

  const socialIcons = (
    <>
      <a href="https://www.facebook.com/kamrulhasan.tanmoy.79/">
        <FaFacebook className="w-5 h-5 mr-2" />
      </a>
      <a href="https://www.linkedin.com/in/md-kamrul-hasan-590809171/">
        <FaLinkedin className="w-5 h-5 mr-2" />
      </a>
      <a href="https://github.com/HasanMdKamrul">
        <FaGithub className="w-5 h-5 mr-2" />
      </a>
      <a href="https://www.xing.com/profile/MDKAMRUL_HASAN13/cv">
        <FaXing className="w-5 h-5 mr-2" />
      </a>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Kamrul Hasan
        </Link>
      </div>
      <div className="navbar-end">{socialIcons}</div>
      <div>{themeMenu}</div>
    </div>
  );
};

export default Navbar;
