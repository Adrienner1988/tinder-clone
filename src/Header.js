import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";


const Header = () => {
  return (
    <>
      <div className="header">
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
        <img
          className="header__logo"
          src="https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png"
          alt="tinder icon"
        />
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </div>
    </>
  );
};
export default Header;
