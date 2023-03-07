import React from "react";
import NavLink from "react-router-dom/NavLink";

const Header = () => (
  <header>
    <span>
      <h1>Expensify</h1>
      <NavLink activeClassName="is-active" to="/" exact={true}>Home</NavLink>
      <NavLink activeClassName="is-active" to="/create">Create Expense</NavLink>
      <NavLink activeClassName="is-active" to="/help">Help</NavLink>
    </span>
  </header>
)

export default Header;