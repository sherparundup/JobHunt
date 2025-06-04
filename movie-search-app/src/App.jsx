import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';

function App() {

  return (
     <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/favorites" element={<Favorites />} /> */}
      </Routes>
  )
}

export default App
