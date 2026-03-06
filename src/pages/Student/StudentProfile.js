import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import api from "../../api/api";
import toast from "react-hot-toast";
import "../../styles/profile.css";
import '../../styles/management.css';
import Header from '../../components/Header'

export default function StudentProfile() {

  const location = useLocation();
  const navigate = useNavigate();

  // 🔑 get logged-in student id
  const studentId = location.state?.studentId;

  const [student, setStudent] = useState(null);

  useEffect(() => {
    if (!studentId) {
      toast.error("Student ID not found. Please login again.");
      navigate("/student-login");
      return;
    }

    loadStudent();
  }, [studentId]);

  const loadStudent = async () => {
    try {
      const res = await api.get(`/student/get/${studentId}`);
      setStudent(res.data);
    } catch (err) {
      toast.error("Failed to load student profile");
    }
  };

  if (!student) {
    return <h3 style={{ textAlign: "center" }}>Loading...</h3>;
  }

  return (
    <>
    {/* <Header />  */}
    <div className="profile-container">
      <h2>Student Profile</h2>
      <div className="back-wrapper">
  <Link to="/" className="back">Home</Link>
</div>
      <div className="profile-card">

        <div className="profile-row">
          <span>ID</span>
          <span>{student.id}</span>
        </div>

        <div className="profile-row">
          <span>Name</span>
          <span>{student.studentName}</span>
        </div>

        <div className="profile-row">
          <span>DOB</span>
          <span>{student.dob}</span>
        </div>

        <div className="profile-row">
          <span>Gender</span>
          <span>{student.gender}</span>
        </div>

        <div className="profile-row">
          <span>Class</span>
          <span>{student.studentClass}</span>
        </div>

        <div className="profile-row">
          <span>Email</span>
          <span>{student.email}</span>
        </div>

        <div className="profile-row">
          <span>Phone</span>
          <span>{student.phoneNo}</span>
        </div>

        <div className="profile-row">
          <span>Address</span>
          <span>{student.address}</span>
        </div>

        <div className="profile-row">
          <span>Aadhar</span>
          <span>{student.aadharNo}</span>
        </div>

        <div className="profile-row">
          <span>Father Name</span>
          <span>{student.fatherName}</span>
        </div>

        <div className="profile-row">
          <span>Mother Name</span>
          <span>{student.motherName}</span>
        </div>

        

      </div>
    </div>
    </>
  );
}
