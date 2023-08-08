import React from "react";
import { HashRouter, Route,Routes } from "react-router-dom";
import { Login } from "components/Login";
import { SignUp } from "components/SignUp";
import MainSpace from "components/MainSpace/MainSpace";
import Movie from "components/Movie/Movie";



function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/mainSpace" element={<MainSpace/>} />
          <Route path="/movie/:id" element={<Movie/>}/>
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
