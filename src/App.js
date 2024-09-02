import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import PrivateChat from "./PrivateChat"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/chat/:person"
            element={
              <>
                <Header backButton="/chat" />
                <PrivateChat />
              </>
            }
          />

          {/* Message page with back button */}
          <Route
            path="/chat"
            element={
              <>
                <Header backButton="/" />
                <Chats />
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Header />
                <TinderCards />
                <SwipeButtons />
              </>
            }
          />
        </Routes>

        {/* Chat Screen */}

        {/* Individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
