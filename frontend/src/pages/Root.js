import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <Outlet />
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}