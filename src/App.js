import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <Router>
        <Routes>
          <Route path="/chat" />
          <Route path="/" />
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
