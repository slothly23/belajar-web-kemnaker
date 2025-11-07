import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import StudentForm from './StudentForm'
import StudentTable from './StudentTable'
import { useNavigate } from 'react-router-dom'

export default function DataSiswa() {
    // deklarasi nilai awal students : array kosong
    const [students, setStudents] = useState([]);
    // const [loading, setLoading] = useState(true);
    // nilai awal dari field-field di dalam students
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [alamat, setAlamat] = useState("");
    const navigate = useNavigate();

    // fungsi untuk pengambilan data, pake axios
    const fetchData = () => {
        axios.get('https://mytechs.my.id/data_siswa_api/apiSiswa.php') // get 'endpoint'
        .then(response => {
            // kalau berhasi apa yg dilakukan
            setStudents(response.data); // masukin data dari API ke array students
            console.log(response);
        })
        .catch(error => {
            // kalau gagal apa yg dilakukan
        })
        .finally(() => {
            // setLoading(false);
        })
    }

   
  return (
    <div className="container mt-5">
        <h2 className="text-center mb-4">Aplikasi Data Siswa Baru</h2>
        <StudentForm onAdd={addStudent}/>
        <StudentTable students={students} onDelete={deleteStudent}/>
    </div>
  )
}
