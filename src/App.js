
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <Router>
        <Routes>
          <Route path="/chat" />
          <Route path="/" element={<TinderCards />} />
        </Routes>

        {/* Cards */}
        {/* Buttons at bottom */}
        {/* Chat Screen */}
        {/* Individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
