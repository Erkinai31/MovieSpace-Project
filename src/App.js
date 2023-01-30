import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "components/Login";
import { SignUp } from "components/SignUp";
import MainSpace from "components/MainSpace/MainSpace";



function App() {
  return (
    <div>
      <Router basename="/MovieSpace-Project">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/mainSpace" element={<MainSpace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
