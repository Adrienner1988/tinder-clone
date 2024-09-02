import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Shannon Thornton",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuU9eEbNiR3MB9CJG5o5muYUk_tA5F4kUcEA&s",
    },
  ]);

  return (
    <>
      <h1>TinderCards</h1>
      <div className="card__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </>
  );
};

export default TinderCards;
