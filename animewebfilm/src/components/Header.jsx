import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

Header.propTypes = {};

function Header(props) {
  return (
    <div className="header">
      <div className="container">
        <header className="d-flex justify-content-between">
          <div className="header__logo ">
            <a href="/">
              <img src="/logo.png" alt="" />
            </a>
          </div>

          <ul className="header__nav d-flex">
            <li>
              <NavLink
                className='header__link'
                to='/'
              >
                Homepage
              </NavLink>
            </li>

            <li className="header__category">
              <NavLink
                className='header__link'
                to='/categories'
              >
                Categories
                <img src="/arrow.png" alt="" />
              </NavLink>

              <ul className="category__list">
                <li className="cartegory__item">
                  <Link
                    className="category__link"
                    to='/categories'>
                    Categories
                  </Link>
                </li>
                <li className="cartegory__item">
                  <a className="category__link" href="/">
                    Anime Details
                  </a>
                </li>
                <li className="cartegory__item">
                  <a className="category__link" href="/">
                    Anime Watch
                  </a>
                </li>
                <li className="cartegory__item">
                  <a className="category__link" href="/">
                    Blog Details
                  </a>
                </li>
                <li className="cartegory__item">
                  <a className="category__link" href="/">
                    Sign Up
                  </a>
                </li>
                <li className="cartegory__item">
                  <a className="category__link" href="/">
                    Login
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <NavLink
                className='header__link'
                to='/blog'
              >
                Our Blog
              </NavLink>
            </li>

            <li>
              <NavLink
                className='header__link'
                to='/contact'
              >
                Contacts
              </NavLink>
            </li>
          </ul>

          <div className="header__plus d-flex ">
            <span className="header__search">
              <input className="search__input" type="text" placeholder="Search..." />
              <img src="/search.png" alt="" />
            </span>
            <Link to='/login'>
              <img src="/user.png" alt="" />
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
