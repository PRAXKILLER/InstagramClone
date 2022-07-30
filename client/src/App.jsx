import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AddPost from "./components/Post/AddPost";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import WaitingPage from "./pages/WaitingPage";



function App() {

  return (
    <Routes>
      <Route path="/" element={<WaitingPage />} />
      <Route
        path="/:type"
        element={
          <HomeLayout>
            <HomePage />
          </HomeLayout>
        }
      />
      <Route
        path="/login"
        element={
          <LoginPage>
            <Signin />
          </LoginPage>
        }
      />
      <Route
        path="/signup"
        element={
          <LoginPage>
            <Signup />
          </LoginPage>
        }
      />
    </Routes>
  );
}

export default App;
