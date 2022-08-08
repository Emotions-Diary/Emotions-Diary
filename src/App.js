// CSS import
import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";

// Router import
import { Routes, Route } from 'react-router-dom';

// Component import
import Main from './pages/Main'
import Write from './pages/Write'
import Detail from './pages/Detail'

function App() { 
 return <Routes>
    <Route path='/' exact="true" element={<Main />} />
    <Route path='/write' element={<Write />} />
    <Route path='/detail/:id' element={<Detail />} />
  </Routes>;
}

export default App;
