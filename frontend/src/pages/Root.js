import { NavLink, Outlet } from "react-router-dom";
import logoImg from "../assets/images/logo_black_nobg.png";
import "./root.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { categoriesAction } from "../store";
import { useDispatch } from "react-redux";

const apiDomain = process.env.REACT_APP_API_DOMAIN;

export default function Root() {
  const dispatch = useDispatch();
  const [dropDownVisible, setDropdownVisible] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch(`${apiDomain}get-categories/`);
      if (response.ok) {
        const responseData = await response.json();
        setCategories(responseData.categories);
        dispatch(categoriesAction.setCategories(responseData.categories));
      }
    }

    fetchCategories();
  }, [setCategories]);

  return (
    <>
      <ul
        className={`navigation-list-mobile navigation-list ${
          navVisible ? "visible" : ""
        }`}
      >
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/"
            onClick={() => {
              setNavVisible(false);
            }}
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
          <ul className={`dropdown-mobile ${dropDownVisible ? "visible" : ""}`}>
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
                    onClick={() => {
                      setNavVisible(false);
                    }}
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
            to="/services-and-contacts"
            onClick={() => {
              setNavVisible(false);
            }}
          >
            Услуги и контакти
          </NavLink>
        </li>
        {isAuthenticated ? (
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/logout"
              onClick={() => {
                setNavVisible(false);
              }}
            >
              Изход
            </NavLink>
          </li>
        ) : (
          ""
        )}
      </ul>
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
                to="/services-and-contacts"
              >
                Услуги и контакти
              </NavLink>
            </li>
            {isAuthenticated ? (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to="/logout"
                >
                  Изход
                </NavLink>
              </li>
            ) : (
              ""
            )}
          </ul>
        </nav>
        <div
          className={`nav-button ${navVisible && "active"}`}
          onClick={() => {
            setNavVisible(!navVisible);
          }}
        >
          <div className="nav-button-element"></div>
          <div className="nav-button-element"></div>
          <div className="nav-button-element"></div>
        </div>
      </header>
      <Outlet />
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}
