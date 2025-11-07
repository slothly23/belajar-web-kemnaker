import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import StudentForm from './StudentForm'
import StudentTable from './StudentTable'
import { useNavigate } from 'react-router-dom'

export default function DataSiswa() {
    // deklarasi nilai awal students : array kosong
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    // nilai awal dari field-field di dalam students
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [alamat, setAlamat] = useState("");
    const navigate = useNavigate();

    // panggil fungsi fetchData menggunakan useEffect
    useEffect(() => {
        fetchData();
    }, []);

    // fungsi untuk pengambilan data, pake axios
    const fetchData = () => {
        axios.get('https://mytechs.my.id/data_siswa_api/apiSiswa.php') // get 'endpoint'
            .then(response => {
                // kalau berhasi apa yg dilakukan
                setStudents(response.data); // masukin data dari API ke array state students | state: wadah
                console.log('response data: ', response.data); // liat bentuk data
                // console.log('response: ', response); // liat response
            })
            .catch(error => {
                // kalau gagal apa yg dilakukan
            })
            .finally(() => {
                setLoading(false);
            })
    }



    return (
        <>
            <div className="container">
                <div className="card mt-2">
                    <div className="card-body">
                        {/* tomol modal */}
                        <button type="button" className="btn btn-primary col-12" data-bs-toggle="modal" data-bs-target="#TambahiswaModal">
                            Tambah Siswa
                        </button>

                        <hr />

                        <table className="table table-bordered table-striped">
                            <thead className="table-dark">
                                <tr>
                                    <th scope='col'>#</th>
                                    <th scope='col'>Nama</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Alamat</th>
                                    <th scope='col'>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="text-center text-muted">
                                            Belum ada data siswa
                                        </td>
                                    </tr>
                                ) : (
                                    students.map((student, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{student.nama_siswa}</td>
                                            <td>{student.email_siswa}</td>
                                            <td>{student.alamat_siswa}</td>
                                            <td>
                                                {/* <button 
                                                className="btn btn-danger btn-sm"
                                                onClick={() => onDelete(student.id)}
                                            >
                                                Hapus
                                            </button> */}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
         
            <div className="modal fade" id="TambahiswaModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="TambahiswaModal">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
