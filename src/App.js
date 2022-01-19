import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Swipe from './Components/Swipe'
import Category from './Components/Category';
import Sliders from './Components/Sliders';
import Dictionary from './Components/Dictionary';
import Profile from './Components/Profile';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={
            <Swipe />
          } />
          <Route path='/category' element={
            <Category />
          } />
          <Route path='/sliders' element={
            <Sliders />
          } />
          <Route path='/profile' element={
            <Profile />
          } />
          <Route path='/dictionary' element={
            <Dictionary />
          } />
          <Route path='/de/Swipe' element={
            <Swipe />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
