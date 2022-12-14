// Router import
import { Routes, Route } from 'react-router-dom';

// Component import
import SignIn from './pages/sign/SignIn/SignIn';
import SignUp from './pages/sign/SignUp/SignUp';
import Main from './pages/main/Main';
import Write from './pages/write/Write';
import Detail from './pages/detail/Detail';

// Redux import
import { useSelector } from 'react-redux';

function App() {
  const status = useSelector((state) => state.user.loginStatus);

  return (
    <Routes>
      <Route path="/" exact="true" element={status ? <Main /> : <SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/write" element={status ? <Write /> : <SignIn />} />
      <Route path="/detail/:id" element={status ? <Detail /> : <SignIn />} />
      <Route path="*" element={<SignIn />} />
    </Routes>
  );
}

export default App;
