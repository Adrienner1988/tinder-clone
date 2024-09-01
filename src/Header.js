import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";

const Header = () => {
return (
  <>
    <div className="header">
      <PersonIcon className="header__icon" fontSize="large" />
      <img
        className="header__logo"
        src="https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png"
        alt="tinder icon"
      />
      <ForumIcon className="header__icon" fontSize="large" />\
    </div>
  </>
);
}
export default Header