import './App.css';
import React,{useState} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';



function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigate to={`/home`} />} />
      <Route path='/:type' element={<HomeLayout>
        <HomePage />
      </HomeLayout>}/>
      <Route path='/login' element={<LoginPage />} />      
    </Routes>
  );
}

export default App;
//<Routes path='/index' element={<Post />}/>    import Post from './components/Post/index';