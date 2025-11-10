import React, { useState } from 'react'

import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditSiswa() {
    const { id } = useParams(); // ngamnbil id dari parameter :id di url / path
    const [loading, setLoading] = useState(true);
    // nilai awal dari field-field di dalam students
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [alamat, setAlamat] = useState("");

    useEffect(() => {
        fetchDataById()
    }, []) // diload sekali saja saat di mount

    // mengambil 1 data dari api berdasarkan id
    const fetchDataById = () => {
        axios.get(`https://mytechs.my.id/data_siswa_api/apiSiswa.php?id=${id}`) // endpoint API
            .then(response => {
                // kalau berhasi apa yg dilakukan
                console.log('response data: ', response.data[0]); // tampilkan response data index 0 di console
                const myData = response.data[0];
                setNama(myData['nama_siswa'])
                setEmail(myData['email_siswa'])
                setAlamat(myData['alamat_siswa'])
            })
            .catch(error => {
                // kalau gagal apa yg dilakukan
            })
            .finally(() => {
                setLoading(false);
            })
    }


    // Fungsi handleUpdate akan dipanggil saat form disubmit
    const handleUpdate = (e) => {
        e.preventDefault(); // Mencegah perilaku default form (agar halaman tidak reload otomatis)

        // Mengirim data ke API menggunakan metode PUT via Axios
        axios.put(`https://mytechs.my.id/data_siswa_api/apiSiswa.php?id=${id}`, 
                {
                    // Data yang dikirim ke server (sesuai struktur yang diharapkan API)
                    nama_siswa: nama,     // ambil dari state "nama"
                    email_siswa: email,   // ambil dari state "email"
                    alamat_siswa: alamat  // ambil dari state "alamat"
                }
            )
            // Jika permintaan berhasil (status 200)
            .then(response => {
                console.log(response);
                var message = response.data.message
                if (message) {
                    alert('Data berhasil diupdate')
                }
                
            })
            // .catch untuk menangani error
            .catch(error => {
                console.error("Gagal update data:", error);
                alert("Gagal update data" + error.message)
            })
            .finally(() => {
                // Bagian ini dijalankan setelah proses selesai
                setLoading(false)
            })
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h5 className='mb-3'>Edit Data Siswa</h5>
                    <form onSubmit={handleUpdate}>
                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingNama"
                                placeholder="Nama..."
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                            />
                            <label htmlFor="floatingNama">Nama</label>
                        </div>

                        <div className="form-floating mb-2">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingEmail"
                                placeholder="Email..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="floatingEmail">Email</label>
                        </div>

                        <div className="form-floating mb-3">
                            <textarea
                                className="form-control"
                                id="floatingAlamat"
                                placeholder="Alamat Siswa"
                                style={{ height: "100px" }}
                                value={alamat}
                                onChange={(e) => setAlamat(e.target.value)}
                            ></textarea>
                            <label htmlFor="floatingAlamat">Alamat</label>
                        </div>

                        <button type="submit" className="btn btn-primary col-12">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}
