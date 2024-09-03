import React from "react";
import "./Message.css";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

export const Message = ({ name, message, timeStamp, profilePic }) => {
  return (
    <>
    <Link to={`/chat/${name}`}>
      <div className="message">
        <Avatar className="message__image" alt={name} src={profilePic} />
        <div className="message__detail">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="message__timeStamp">{timeStamp}</p>
      </div>
    </Link>
    </>
  );
};

export default Message;
