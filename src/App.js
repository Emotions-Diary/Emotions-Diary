// Package import
import { Routes, Route } from 'react-router-dom';

// Component import
import SignIn from './pages/sign/SignIn'
import SignUp from './pages/sign/SignUp'
import Main from './pages/Main'
import Write from './pages/Write'
import Detail from './pages/Detail'

function App() {
  return <Routes>
    {/* <Route path='/' exact="true" element={loginStatus ? <Main /> : <SignIn />} />  */}
    <Route path='/' exact="true" element={<SignIn />} /> 
    <Route path='/signup' exact="true" element={<SignUp />} />
    <Route path='/main' exact="true" element={<Main />} />
    <Route path='/write' element={<Write />} />
    <Route path='/detail/:id' element={<Detail />} />
  </Routes>;
}

export default App;