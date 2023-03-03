import { Button } from "@mui/material";
import React from "react";

import { logo } from "../../Images/logo";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="navCell">
        <img className="images" src={logo} alt="graf-logo" />
      </div>
      <div className="navCell">
        <div className="searchContainer">
          <button className="locationButton">konum seç</button>
          <input
            placeholder="Doktor veya branş arayın..."
            type="text"
            className="doctorSearch"
          />
          <button className="doctorSearchButton">
            ara <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <div className="navCell">
        <button className="navButton">Hemen Kaydol</button>
        <button className="navButton">Giriş Yap</button>
      </div>
    </div>
  );
};

export default Navbar;
