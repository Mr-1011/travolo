import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar'
import Swipe from './Components/Swipe'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <Swipe/>
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
