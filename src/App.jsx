import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminRegistration from "./components/AdminRegistration";
import UserRegistration from "./components/UserRegistration";
import RegistrationButtons from "./components/RegistrationButtons";
import UserHome from "./components/UserHome";  
import Quiz from "./components/Quiz";  
import AdminQuestionForm from "./components/AdminQuestionForm";
import AdminHome from "./components/AdminHome";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-register" element={<AdminRegistration />} />
        <Route path="/user-register" element={<UserRegistration />} />
        <Route path="/register-options" element={<RegistrationButtons />} />
        <Route path="/user-home" element={<UserHome />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/admin-add-question" element={<AdminQuestionForm />} />
        <Route path="/admin" element={<AdminHome />} />
      </Routes>

      <ToastContainer />
    </>
  );
};

export default App;
