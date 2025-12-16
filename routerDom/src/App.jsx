import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage';

import AboutPage from './components/AboutPage';
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App