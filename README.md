# Tinder Clone

![Project Screenshot](src/images/Tinder_Screenshot.png)

## Table of Contents
- [About](#about)
- [Video](#video)
- [Tech](#tech)
- [Getting Started](#getting-started)
- [Code Examples](#code-examples)
- [Features](#features)
- [Status](#status)
- [Why?](#why)
- [Contact](#contact)
- [License](#license)

## About
This application is a clone of the popular dating app, Tinder. It allows users to swipe through profiles of other users, either left to pass or right to like. Two users can start a conversation if they like each other's profiles. The app also features a chat section where users can view their matches and send direct messages (DMs) to each other, just like in the original Tinder app.

## Video
![Watch the demo](https://drive.google.com/file/d/1Old6zujdjfpkcWHtjjgueDkkAJuIDkqy/view)

## Tech
A list of the technologies and tools used in the project:
- React
- Firebase
- Netlify
- JavaScript ES6
- HTML5/CSS3
- React Router
- Material UI
- Google Fonts

## Getting Started

### Prerequisites
- A web browser

### Usage
You can access the live version of the application here: [Live Demo](https://ad-tinder-clone.netlify.app/)

### Cloning the Repository (Optional)
If you still want to clone the repository and explore the code:
1. Clone the repository: ``` bash `git clone https://github.com/Adrienner1988/tinder-clone.git`
2. Navigate to the project directory: `cd tinder-clone`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## Code Examples
```javascript
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
```

## Features
- Swipe through user profiles.
- Send direct messages.
- View and navigate to chat conversations.
- Responsive design for mobile and desktop views.
- User-friendly interface.

## Status
The application is complete and functional as a Tinder clone. I plan to continue building on this project by adding new features and enhancements in the future.

## Why
This project represents a personal achievement in my coding journey. It has allowed me to apply my skills and learn new concepts, boosting my confidence as a developer. I am excited to keep enhancing this application and explore more features as I grow in my programming abilities.

## Contact
- Email: `adriennerdaniels@gmail.com`
- GitHub: `Adrienner1988`

## License
This project is currently not licensed.
