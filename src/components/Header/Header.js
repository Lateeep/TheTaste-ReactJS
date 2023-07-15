import React from "react";
import "./Header.scss";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="header-content flex align-center justify-center flex-column text-center">
        <h1 className="text-white header-title ls-2">What do you want to cook?</h1>
        <br></br>
        <SearchForm />
        <br></br>
        <p className="text-uppercase text-white my-3 ls-1">let's cook independently</p>
      </div>
    </header>
  );
};

export default Header;
