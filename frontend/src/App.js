import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

const domain = process.env.REACT_APP_DOMAIN;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/logout", element: <Logout /> },
    ],
  },
]);

function App() {
  useEffect(() => {
    async function checkSession() {
      try {
        const response = await fetch(`${domain}check-session/`, {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) {
          //update user
        } else {
          //update user
        }
      } catch (error) {
        // update user
      }
    }
    checkSession();
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
