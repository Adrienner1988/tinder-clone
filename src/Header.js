import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useNavigate } from "react-router-dom";


const Header = ({backButton}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        { backButton ? (
          <IconButton onClick={() => navigate(backButton)}>
          <ArrowBackIosIcon className="header__icon" fontSize="large" />
          </IconButton>
        ) : (
          <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
          </IconButton>
        )}

        {/* Tinder logo */}
        <Link to={"/"}>
          <img
            className="header__logo"
            src="https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png"
            alt="tinder icon"
          />
        </Link>

        {/* Chat icon */}
        <Link to={"/chat"}>
          <IconButton>
            <ForumIcon className="header__icon" fontSize="large" />
          </IconButton>
        </Link>
      </div>
    </>
  );
};
export default Header;
