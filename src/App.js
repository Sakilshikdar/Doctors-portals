import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Login from './Pages/Login/Login'
import Header from "./Pages/shared/Header";
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Appoinment from "./Pages/Appoinment/Appoinment";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview";
import Users from "./Pages/Dashboard/Users";
import History from "./Pages/Dashboard/Histotry";
import RequireAdmin from "./Pages/Login/RequirAdmin";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import ManageDoctor from "./assets/ManageDocter";
import Payment from "./Pages/Dashboard/Payment";

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
      <Route path="/dashboard" element={<RequireAuth>
        <Dashboard/>
      </RequireAuth>}>
        <Route index element={<MyAppointments></MyAppointments>}></Route>
        <Route path='review' element={<MyReview></MyReview>}></Route>
        <Route path='history' element={<History></History>}></Route>
        <Route path='payment/:id' element={<Payment></Payment>}></Route>
        <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        <Route path='addDoctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
        <Route path='manage' element={<RequireAdmin><ManageDoctor></ManageDoctor></RequireAdmin>}></Route>
      </Route>
        <Route path="about" element={<About />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
