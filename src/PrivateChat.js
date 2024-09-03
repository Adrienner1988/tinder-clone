import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PrivateChat.css";
import Avatar from "@mui/material/Avatar";

const PrivateChat = () => {
  const { name } = useParams();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const allMessages = {
      Megan: [
        {
          name: "Megan",
          image:
            "https://media.vogue.co.uk/photos/5e99aa2c2e79460009746d75/2:3/w_2560%2Cc_limit/001-MeganTheeStallion-VogueGlobal-16April20-Courtesy.jpg ",
          message: "Hey!",
        },
        {
          message: "Hey cutie, how are you?",
        },
        {
          name: "Megan",
          image:
            "https://media.vogue.co.uk/photos/5e99aa2c2e79460009746d75/2:3/w_2560%2Cc_limit/001-MeganTheeStallion-VogueGlobal-16April20-Courtesy.jpg ",
          message: "I'm good thank you for asking. How are you?",
        },
      ],
      Hallie: [
        {
          name: "Hallie",
          image:
            "https://www.byrdie.com/thmb/qkwlzvz-VPvqhvVdMhrk_HmGy4w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/halle1-5cd8737f3f2a4d65927c893bf8cb320f.png",
          message: "Hello! 👋🏾",
        },
        {
          message: "Hello Beautiful! 😍",
        },
      ],
      Chlöe: [
        {
          message: "Hey, how's it going?",
        },
        {
          name: "Chlöe",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScM004Ju6Siml6-Vdi_GYKrCfnXWpm4UcrHQ&s",
          message: "Pretty good! How is it going for you?",
        },
      ],
      Ohemaa: [
        {
          message: "😍",
        },
        {
          name: "Ohemaa",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-iAGYo9nIIZ31g_Tj5zJJg6UrxhAMosZ6FA&s",
          message: "🙌🏿",
        },
      ],
      Karrueche: [
        {
          message: "👀 You are so pretty in your pfp!",
        },
      ],
    };
    setMessages(allMessages[name] || []);
  }, [name]);

  const handleSend = (event) => {
    event.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <>
      <div className="privateChat">
        <h2 className="chatsHeader">you matched with {name}</h2>
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
