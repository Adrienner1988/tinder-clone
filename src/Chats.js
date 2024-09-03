import React from 'react'
import './Chats.css';
import Message from "./Message";


const Chats = () => {
  return (
    <>
      <div className="chats">
        <h1 className='chatsHeader'>Matches</h1>
        <Message
          name="Megan"
          message="Ah!"
          timeStamp="30 seconds"
          profilePic="https://media.vogue.co.uk/photos/5e99aa2c2e79460009746d75/2:3/w_2560%2Cc_limit/001-MeganTheeStallion-VogueGlobal-16April20-Courtesy.jpg"
        />
        <Message
          name="Shannon"
          message=""
          timeStamp=""
          profilePic="https://pbs.twimg.com/media/FFd5fbMXsAQnr8g?format=jpg&name=small"
        />
        {/* <Message
          name="Megan"
          message="Ah!"
          timeStamp="30 seconds"
          profilePic="https://media.vogue.co.uk/photos/5e99aa2c2e79460009746d75/2:3/w_2560%2Cc_limit/001-MeganTheeStallion-VogueGlobal-16April20-Courtesy.jpg"
        /> */}
      </div>
    </>
  );
}



export default Chats