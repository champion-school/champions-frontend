
import './App.css';




import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// 🔐 Login Pages
import AdminLogin from "./pages/Login/AdminLogin";
import StaffLogin from "./pages/Login/StaffLogin";
import StudentLogin from "./pages/Login/StudentLogin";

// 👑 Admin Pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
import StudentManagement from "./pages/Admin/StudentManagement";
import StaffManagement from "./pages/Admin/StaffManagement";

// 👨‍🏫 Staff Pages
import StaffDashboard from "./pages/Staff/StaffDashboard";
import StaffProfile from "./pages/Staff/StaffProfile";
import StaffStudentManagement from "./pages/Admin/StudentManagement";

// 🎓 Student Pages
import StudentProfile from "./pages/Student/StudentProfile";
import Home from './pages/Home';
import EnquiryModal from "./components/EnquiryModal";

// register page
import Register from "./pages/Register";

export default function App() {
  return (
    <>
      {/* 🔔 Toast Notification */}
      <Toaster position="top-right" />

      <BrowserRouter>
        <Routes>

          {/* ===== LOGIN ROUTES ===== */}
          {/* <Route path="/" element={<AdminLogin />} /> */}
          <Route path='/' element={<Home/>}/>
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/staff-login" element={<StaffLogin />} />
          <Route path="/student-login" element={<StudentLogin />} />

          {/* ===== ADMIN ROUTES ===== */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin/student-management" element={<StudentManagement />} />
          <Route path="/admin/staff-management" element={<StaffManagement />} />

          {/* ===== STAFF ROUTES ===== */}
          <Route path="/staff-dashboard" element={<StaffDashboard />} />
          <Route path="/staff/profile" element={<StaffProfile />} />
          <Route path="/staff/students" element={<StaffStudentManagement />} />

          {/* ===== STUDENT ROUTES ===== */}
          <Route path="/student-profile" element={<StudentProfile />} />
          <Route path="/enquire-modal" element={<EnquiryModal/>}/>

          {/* ===== Register Pages =====*/}
          <Route path="/register" element={<Register />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
