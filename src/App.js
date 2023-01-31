import React from "react";
import { HashRouter, Route,Routes } from "react-router-dom";
import { Login } from "components/Login";
import { SignUp } from "components/SignUp";
import MainSpace from "components/MainSpace/MainSpace";



function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/mainSpace" element={<MainSpace/>} />
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
