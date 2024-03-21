import React from "react";
import Calculator from "./Calculator/Calculator";
import { Link, NavLink, Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        className="bg-secondry d-flex flex-column justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        <div class="card bg-dark" style={{ width: "18rem",}}>
          <div className=" card-body d-flex justify-content-between">
            <NavLink
              to=""
              className={({ isActive }) =>
                `
                  nav-link
                  ${isActive ? "link-light" : "link-secondary"}
                  `
              }
            >
              Calculator
            </NavLink>

            <NavLink
              to="/converter"
              className={({ isActive }) =>
                `
                  nav-link
                  ${isActive ? "link-light" : "link-secondary"}
                  `
              }
            >
              Currency Converter
            </NavLink>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Home;
