import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import { database } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  //   Pulling people from firebase
  useEffect(() => {
    const getCollection = collection(database, "people");
    const unsubscribe = onSnapshot(getCollection, (snapshot) =>
      setPeople(snapshot.docs.map((doc) => doc.data()))
    );
    // The clean up
    return () => unsubscribe();
  }, []);

  //   Swiping function
  const handleSwipe = (direction, name) => {
    if (direction === "left") {
      console.log(`Removing: ${name}`);
    } else if (direction === "right") {
      console.log(`Keeping: ${name}`);
    }
  };

  return (
    <>
      {/* Card */}
      <div className="card__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(direction) => handleSwipe(direction, person.name)}
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
