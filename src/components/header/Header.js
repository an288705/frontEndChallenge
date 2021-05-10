import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <header className="header">
      <ul className="menu">
        <li className="menut__item">
          <NavLink activeClassName="menut__active-item" to="/shopifyFrontEndChallenge">
            Home
          </NavLink>
        </li>
        <li className="menut__item">
          <NavLink activeClassName="menut__active-item" to="/nominations">
            Nominations
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
