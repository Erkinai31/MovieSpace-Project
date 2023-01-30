import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "components/Login";
import { SignUp } from "components/SignUp";
import MainSpace from "components/MainSpace/MainSpace";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/MovieSpace-Project" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/mainSpace" element={<MainSpace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
