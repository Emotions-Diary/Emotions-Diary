
// CSS import
import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";

// Router import

// Package import

import { Routes, Route } from 'react-router-dom';

// Component import
import SignIn from './pages/sign/SignIn/SignIn';
import SignUp from './pages/sign/SignUp/SignUp';
import Main from './pages/Main';
import Write from './pages/Write';
import Detail from './pages/Detail';

// Redux import
import { useSelector } from 'react-redux';


function App() { 
 return <Routes>
    <Route path='/' exact="true" element={<Main />} />
    <Route path='/write' element={<Write />} />
    <Route path='/detail/:id' element={<Detail />} />
  </Routes>;
}
// function App() {
//   const loginStatus = useSelector((state) => state.user.loginStatus);
//   return (
//     <Routes>
//       <Route
//         path="/"
//         exact="true"
//         element={loginStatus ? <Main /> : <SignIn />}
//       />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/write" element={loginStatus ? <Write /> : <SignIn />} />
//       <Route
//         path="/detail/:id"
//         element={loginStatus ? <Detail /> : <SignIn />}
//       />
//     </Routes>
//   );

// }

export default App;
