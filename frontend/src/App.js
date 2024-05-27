import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import { authActions } from "./store";
import { useDispatch } from "react-redux";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import { getCsrfToken } from "./utils/auth";

const apiDomain = process.env.REACT_APP_API_DOMAIN;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/logout", element: <Logout /> },
      { path: "/gallery/:category", element: <Gallery /> },
      { path: "/services-and-contacts", element: <Services /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function checkSession() {
      try {
        console.log(`${apiDomain}check-session/`);
        const response = await fetch(`${apiDomain}check-session/`, {
          method: "GET",
          credentials: "include",
          headers: {
            "X-CSRFToken": getCsrfToken(),
          },
        });
        console.log(await response.json());
        if (!response.ok) {
          dispatch(authActions.authenticate(false));
        } else {
          dispatch(authActions.authenticate(true));
        }
      } catch (error) {
        dispatch(authActions.authenticate(false));
      }
    }
    checkSession();
  }, [dispatch]);
  return <RouterProvider router={router} />;
}

export default App;
