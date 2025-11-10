import CardMovie from '../CardMovie'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Movies() {
    // deklarasi nilai awal movies : array kosong
    const [movies, setMovies] = useState([]);
    // nilai awal dari field-field di dalam movies
    const [title, setTitle] = useState("");
    const [year, setYear] = useState(0);
    const [description, setDescription] = useState("");
    const navigate = useNavigate()

    // useEffect digunakan untuk memanggil fungsi fetchData() hanya sekali
    // saat komponen pertama kali dimuat (mounted)
    useEffect(() => {
        fetchData();
    }, []); // [] artinya hanya dijalankan sekali saat render pertama

    const fetchData = () => {
        axios.get('http://pblweb0304.cloud:3000/api/movies')
            .then(response => {
                // kalau berhasi apa yg dilakukan
                console.log(response.data);
                setMovies(response.data); // masukin data dari API ke state movies(array) | state: wadah
            })
            .catch(err => {

            })
            .finally(() => { })
    }

    // Fungsi handleSubmit akan dipanggil saat form disubmit
    const handleSubmit = (e) => {
        e.preventDefault(); // Mencegah perilaku default form (agar halaman tidak reload otomatis)

        axios.post('http://pblweb0304.cloud:3000/api/movies', {
            // Data yang dikirim ke server (sesuai struktur yang diharapkan API)
            title: title,               // ambil dari state title
            year: year,                 // ambil dari state year
            description: description    // ambil dari state description
        })
            .then(response => {
                setTitle(""); // Kosongkan kembali input setelah berhasil dikirim
                setYear("");
                setDescription("");

                // Tampilkan respon dari server di console (untuk debugging)
                console.log(response);
                fetchData();
            })
            .catch(error => {
                console.error("Gagal menyimpan data:", error);
                alert("Gagal menyimpan data" + error.message)
            })
            .finally(() => { })
    }

    // Fungsi untuk menghapus data movie berdasarkan id
    const handleDelete = (id) => {
        // Tampilkan pop-up konfirmasi sebelum menghapus data
        const confirmDelete = window.confirm(
            "Apakah kamu yakin akan menghapus data ini?"
        );

        // Jika user klik "Cancel", hentikan fungsi (tidak jadi hapus)
        if (!confirmDelete) return;

        // Jika user klik "OK", lanjut hapus data ke server menggunakan axios.delete()
        axios.delete(`http://pblweb0304.cloud:3000/api/movies/${id}`) // Kirim request DELETE ke API dengan id movie yang dipilih
            .then(response => {
                fetchData(); // Jika berhasil, panggil ulang fetchData() untuk memperbarui daftar movies
            })
            .catch(error => {
                // Jika terjadi error (misal server tidak merespons)
                console.error("Gagal menghapus data:" + error);
                alert("Terjadi kesalahan saat menghapus data");
            })
            .finally(() => {
                // Bagian ini dijalankan setelah proses selesai (berhasil/gagal)
                console.log("Proses hapus data selesai.");
            })
    }

    // fungsi untuk menampilkan form edit data movie sesuai id
    const handleEdit = (id) => {
        navigate(`/edit-movie/${id}`) // menambahkan id ke url, id bisa dipakai di halaman baru untuk get data dari api
    }

    return (
        <div className="container py-4">
            {/* Header + Tombol Tambah */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold text-primary">🎬 Daftar Movie</h3>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#TambahMovieModal"
                >
                    + Tambah Movie
                </button>
            </div>

            {/* List Movies */}
            <div className="row g-4">
                {movies.length === 0 ? (
                    <p className="text-center text-muted">Belum ada movie yang ditambahkan.</p>
                ) : (
                    movies.map((movie, index) => (
                        <CardMovie
                            key={index}
                            movie={movie}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))
                )}
            </div>

            {/* Modal Tambah Movie */}
            <div
                className="modal fade"
                id="TambahMovieModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="TambahMovieLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content shadow">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title" id="TambahMovieLabel">
                                Tambah Movie Baru
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingInputTitle"
                                        placeholder="Judul..."
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="floatingInputTitle">Judul</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="floatingInputYear"
                                        placeholder="Tahun..."
                                        value={year || ""}
                                        onChange={(e) =>
                                            setYear(e.target.value ? parseInt(e.target.value) : null)
                                        }
                                    />
                                    <label htmlFor="floatingInputYear">Tahun</label>
                                </div>

                                <div className="form-floating mb-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingInputDescription"
                                        placeholder="Deskripsi..."
                                        value={description || ""}
                                        onChange={(e) =>
                                            setDescription(e.target.value ? e.target.value : null)
                                        }
                                    />
                                    <label htmlFor="floatingInputDescription">Deskripsi</label>
                                </div>

                                <button className="btn btn-primary col-12" data-bs-dismiss="modal">
                                    Simpan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movies