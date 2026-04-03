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
import RegisterList from "./pages/Admin/RegisterList"; // ⭐ NEW
import GalleryManagement from "./pages/Admin/GalleryManagement";
// 👨‍🏫 Staff Pages
import StaffDashboard from "./pages/Staff/StaffDashboard";
import StaffProfile from "./pages/Staff/StaffProfile";
import StaffStudentManagement from "./pages/Admin/StudentManagement";

// 🎓 Student Pages
import StudentProfile from "./pages/Student/StudentProfile";

// 🌐 Website Pages
import Home from './pages/Home';
import About from './pages/About';
import Photos from './pages/Photos';
import EnquiryModal from "./components/EnquiryModal";

// 📝 Register Page
import Register from "./pages/Register/Register";
import Curriculum from "./pages/Curriculum";

export default function App() {

  return (

    <>

      {/* Toast Message */}
      <Toaster position="top-right" />

      <BrowserRouter>

        <Routes>

          {/* ===== HOME ===== */}
          <Route path="/" element={<Home />} />

          {/* ===== LOGIN ===== */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/staff-login" element={<StaffLogin />} />
          <Route path="/student-login" element={<StudentLogin />} />

          {/* ===== ADMIN ===== */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin/student-management" element={<StudentManagement />} />
          <Route path="/admin/staff-management" element={<StaffManagement />} />
          <Route path="/admin/register-list" element={<RegisterList />} /> {/* ⭐ */}
          <Route path="/admin/gallery" element={<GalleryManagement />} />
          {/* ===== STAFF ===== */}
          <Route path="/staff-dashboard" element={<StaffDashboard />} />
          <Route path="/staff/profile" element={<StaffProfile />} />
          <Route path="/staff/students" element={<StaffStudentManagement />} />

          {/* ===== STUDENT ===== */}
          <Route path="/student-profile" element={<StudentProfile />} />

          {/* ===== WEBSITE ===== */}
          <Route path="/enquire-modal" element={<EnquiryModal />} />
          <Route path="/about" element={<About />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/register" element={<Register />} />
          <Route path="/curriculum" element={<Curriculum />} />

        </Routes>

      </BrowserRouter>

    </>

  );

}