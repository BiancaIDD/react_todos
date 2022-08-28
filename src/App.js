import './App.css';
import SignUp from './pages/sign_up/Sign_up';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About/About';
import SignIn from './pages/sign_in/Sign_in';
import Landing from './pages/landing_page/Landing';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Landing/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='sign_in' element={<SignIn/>}/>
      <Route path='sign_up' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
