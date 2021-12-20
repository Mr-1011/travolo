import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Swipe from './Components/Swipe'
import Category from './Components/Category';
import Sliders from './Components/Sliders';
import Dictionary from './Components/Dictionary';


function App() {
  return (
    <div className="App">
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
          <Route path='/dictionary' element={
            <Dictionary />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
