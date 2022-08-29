import './App.css';
import SignUp from './pages/sign_up/Sign_up';
import { Routes, Route, HashRouter } from "react-router-dom";
import About from './pages/About/About';
import SignIn from './pages/sign_in/Sign_in';
import Landing from './pages/landing_page/Landing';


function App() {
  return (
    <HashRouter>
    <Routes>
      <Route index element={<Landing/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='sign_in' element={<SignIn/>}/>
      <Route path='sign_up' element={<SignUp/>}/>
    </Routes>
    </HashRouter>
  );
}

export default App;
