import React from 'react';
import './App.css';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import Home from './pages/Home';

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>}/>

              </Routes>
          </BrowserRouter>
      </>


)
    ;
}

export default App;
