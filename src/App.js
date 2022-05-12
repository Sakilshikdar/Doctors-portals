import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Login from './Pages/Login/Login'
import Header from "./Pages/shared/Header";
import Footer from "./Pages/shared/Footer";
import Appoinment from "./Pages/Appoinment/Appoinment";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/appointment" element={<Appoinment/>} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
