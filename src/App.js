import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/booking" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
