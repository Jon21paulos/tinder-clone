import React from "react";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards"
import SwipeButtons from "./components/SwipeButtons";
function App() {
  return (
    <div className="App">
        {/* Header */}
        <Header/>
        {/* tindercards */}
        <TinderCards/>
        {/* swipebuttons */}
        <SwipeButtons/>
    </div>
  );
}

export default App;
