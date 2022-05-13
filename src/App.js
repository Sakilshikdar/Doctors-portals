import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Login from './Pages/Login/Login'
import Header from "./Pages/shared/Header";
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Appoinment from "./Pages/Appoinment/Appoinment";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="signup" element={<SignUp />} />
      <Route path="/appointment" element={<RequireAuth>
        <Appoinment/>
      </RequireAuth>} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
