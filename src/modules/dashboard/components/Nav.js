import React from "react";

export default function Nav() {
  return (
    <nav className="header">
      <ul className="header__menu">
        <li className="items">
          <a className="item active" href="#home">
            Home
          </a>
        </li>
        <li className="items">
          <a className="item" href="#setting">
            Setting
          </a>
        </li>
      </ul>
      <div className="search">
        <input
          className="search__input"
          type="search"
          name=""
          placeholder="&nbsp; Search Report"
        />
        <i className="fas fa-search"></i>
      </div>
    </nav>
  );
}
