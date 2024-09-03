import React from 'react'
import './Chats.css';
import Message from "./Message";


const Chats = () => {
  return (
    <>
      <div className="chats">
        <h1 className="chatsHeader">Matches</h1>
        <Message
          name="Megan"
          message="I'm good thank you for asking. How are you?"
          timeStamp="30 seconds ago"
          profilePic="https://media.vogue.co.uk/photos/5e99aa2c2e79460009746d75/2:3/w_2560%2Cc_limit/001-MeganTheeStallion-VogueGlobal-16April20-Courtesy.jpg"
        />
        <Message
          name="Chlöe"
          message="Pretty good! How is it going for you?"
          timeStamp="5 minuets ago"
          profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScM004Ju6Siml6-Vdi_GYKrCfnXWpm4UcrHQ&s"
        />
        <Message
          name="Hallie"
          message="Hey, how's it going?"
          timeStamp="10 minuets ago"
          profilePic="https://www.byrdie.com/thmb/qkwlzvz-VPvqhvVdMhrk_HmGy4w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/halle1-5cd8737f3f2a4d65927c893bf8cb320f.png"
        />
        <Message
          name="Ohemaa"
          message="🙌🏿"
          timeStamp="11 minuets ago"
          profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-iAGYo9nIIZ31g_Tj5zJJg6UrxhAMosZ6FA&s"
        />
        <Message
          name="Karrueche"
          message="👀 You are so pretty in your pfp!"
          timeStamp="3 hours ago"
          profilePic="https://pagesix.com/wp-content/uploads/sites/3/2024/04/karrueche-tran-attends-american-express-80746200.jpg"
        />
      </div>
    </>
  );
}



export default Chats