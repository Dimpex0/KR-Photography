import { NavLink, Outlet } from "react-router-dom";
import logoImg from "../assets/images/logo_black_nobg.png";
import "./root.css";
import { useEffect, useState } from "react";

const apiDomain = process.env.REACT_APP_API_DOMAIN;

export default function Root() {
  const [dropDownVisible, setDropdownVisible] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch(`${apiDomain}get-categories/`);
      const responseData = await response.json();
      setCategories(responseData.categories);
    }

    fetchCategories();
  }, [setCategories]);

  return (
    <>
      <header>
        <NavLink to="/">
          <img src={logoImg} alt="logo icon" />
        </NavLink>
        <nav>
          <ul className="navigation-list">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/"
              >
                Начало
              </NavLink>
            </li>
            <li className="dropdown-container">
              <a
                onClick={() => {
                  setDropdownVisible(!dropDownVisible);
                }}
              >
                Галерия
              </a>
              <ul className={`dropdown ${dropDownVisible ? "visible" : ""}`}>
                {categories &&
                  categories.map((category) => (
                    <li
                      onClick={() => {
                        setDropdownVisible(!dropDownVisible);
                      }}
                      key={category}
                    >
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "active" : "inactive"
                        }
                        to={`/gallery/${category}`}
                      >
                        {category}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/login"
              >
                Услуги и контакти
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}
