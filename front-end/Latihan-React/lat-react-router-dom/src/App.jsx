import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import StudentForm from './components/StudentForm'
import StudentTable from './components/StudentTable'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  // deklarasi nilai awal students : array kosong
  const [students, setStudents] = useState([]);

  // ngambil data dari localStorage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(savedData);
  }, []);

  // memberikan nilai baru untuk localStorage / input nilai baru
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // fungsi untuk menambahkan siswa baru di awal array?, setelahnya adalah data yg sudah ada
  const addStudent = (student) => {
    setStudents([student, ...students]);
  };

  // fungsi untuk hapus 
  const deleteStudent = (id) => {
    const filtered = students.filter((student) => student.id !== id); // pilih semua yang id nya tidak sama dengan id delete
    setStudents(filtered); // simpan yg pengecualian
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <div className="container mt-5">
          <h2 className="text-center mb-4">Aplikasi Data Siswa</h2>
          <StudentForm onAdd={addStudent}/>
          <StudentTable students={students} onDelete={deleteStudent}/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
