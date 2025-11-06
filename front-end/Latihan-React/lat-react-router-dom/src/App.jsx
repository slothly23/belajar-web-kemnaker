import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import StudentForm from './components/StudentForm'
import StudentTable from './components/StudentTable'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(savedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents([student, ...students]);
  };

  const deleteStudent = (id) => {
    const filtered = students.filter((student) => student.id !== id);
    setStudents(filtered);
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
