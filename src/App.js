import React from "react";
import { Route,Routes } from "react-router-dom";
import { Login } from "components/Login";
import { SignUp } from "components/SignUp";
import MainSpace from "components/MainSpace/MainSpace";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/mainSpace" element={<MainSpace />} />
      </Routes>
  
    </div>
  );
}

export default App;
