import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/chat" />
          <Route path="/" element={<TinderCards />} />
        </Routes>
        <SwipeButtons />
        {/* Buttons at bottom */}
        {/* Chat Screen */}
        {/* Individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
