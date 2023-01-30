import React, { useState } from "react";
import { Link } from "react-router-dom";
import foodvila from "../../assets/img/foodvila.jpg";

const Title = () => {
  return (
    <>
      <a href="/">
        <img className="w-[100px]" src={foodvila} alt="logo" />
      </a>
    </>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="flex justify-between shadow-lg bg-pink-100">
        <Title />
        <div>
          <ul className="flex gap-1 m-2">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <Link to="/about">
              <li>About us</li>
            </Link>
            <li>Cart</li>
            <Link to="/instamart">
              <li>InstaMart</li>
            </Link>
          </ul>
        </div>
        {isLoggedIn ? (
          <button
            className="p-2"
            onClick={() => setIsLoggedIn(false)}
          >
            Login
          </button>
        ) : (
          <button
            className="p-2"
            onClick={() => setIsLoggedIn(true)}
          >
            Logout
          </button>
        )}
      </div>
    </>
  );
};

export default Header;
