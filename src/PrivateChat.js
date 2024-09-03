import React, { useState } from "react";
import "./PrivateChat.css";
import Avatar from "@mui/material/Avatar";

const PrivateChat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Megan",
      image:
        "https://media.vogue.co.uk/photos/5e99aa2c2e79460009746d75/2:3/w_2560%2Cc_limit/001-MeganTheeStallion-VogueGlobal-16April20-Courtesy.jpg ",
      message: "Hey!",
    },
    {
      name: "Megan",
      image:
        "https://media.vogue.co.uk/photos/5e99aa2c2e79460009746d75/2:3/w_2560%2Cc_limit/001-MeganTheeStallion-VogueGlobal-16April20-Courtesy.jpg ",
      message: "How is it going?",
    },
    { message: "I'm good thank you for asking. How are you?" },
    // {
    //   name: "Shannon",
    //   image:
    //     "https://pbs.twimg.com/media/FFd5fbMXsAQnr8g?format=jpg&name=small",
    //   message: "How is it going?",
    // },
  ]);

  const handleSend = (event) => {
    event.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <>
      <div className="privateChat">
        <h2 className="chatsHeader">you matched on 9/2/2024</h2>
        {messages.map((message) =>
          message.name ? (
            <div className="privateChat__message">
              <Avatar alt={message.name} src={message.image} />
              <p className="privateChat__text">{message.message}</p>
            </div>
          ) : (
            <div className="privateChat__message">
              <p className="privateChat__messageUser">{message.message}</p>
            </div>
          )
        )}

        <form className="privateChat__input">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            type="text"
            className="privateChat__inputField"
            placeholder="Type a message..."
          />
          <button className="inputButton" onClick={handleSend}>
            SEND
          </button>
        </form>
      </div>
    </>
  );
};

export default PrivateChat;
