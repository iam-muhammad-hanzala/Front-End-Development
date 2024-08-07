import React from "react";
import { Link, Outlet } from "react-router-dom";

function CustomLayout2() {
  return (
    <div>
      <h2>Header 2</h2>

      <nav>
        <ul>
          <li>
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
          </li>

          <li>
            {/* <a href="/about">About</a> */}
            <Link to="/about">About</Link>
          </li>

          <li>
            {/* <a href="/contact">Contact</a> */}
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {/* <a href="/products">Products</a> */}
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <h2>Footer 2</h2>
    </div>
  );
}

export default CustomLayout2;
