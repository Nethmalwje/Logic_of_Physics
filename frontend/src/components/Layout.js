import React from "react";
import { Outlet } from "react-router-dom";
//outlet represents the all the children from the layout component
function Layout() {
  return (
    <main className="App">
      <Outlet />
    </main>
  );
}

export default Layout;
