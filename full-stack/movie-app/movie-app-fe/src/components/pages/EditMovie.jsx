import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'

function EditMovie() {
    const { id } = useParams(); // ngamnbil id dari parameter :id di url / path
    // nilai awal dari field-field di dalam movies
    const [title, setTitle] = useState("");
    const [year, setYear] = useState(0);
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetchDataById()
    }, []) // diload sekali saja saat di mount

    // mengambil 1 data dari api berdasarkan id
    const fetchDataById = () => {
        axios.get(`http://pblweb0304.cloud:3000/api/movies/${id}`)
            .then(response => {
                console.log('response data: ', response.data); // jangan [0] dulu
                const movie = response.data; // ambil langsung objek movie
                setTitle(movie.title || "");
                setYear(movie.year || null);
                setDescription(movie.description || "");
            })
            .catch(error => {
                // kalau gagal apa yg dilakukan
                console.error("Gagal mengambil data movie:", error);
            });
    }

    // Fungsi handleUpdate akan dipanggil saat form disubmit
    const handleUpdate = (e) => {
        e.preventDefault(); // Mencegah perilaku default form (agar halaman tidak reload otomatis)

        // Mengirim data ke API menggunakan metode PUT via Axios
        axios.put(`http://pblweb0304.cloud:3000/api/movies/${id}`, {
            // Data yang dikirim ke server (sesuai struktur yang diharapkan API)
            title: title,               // ambil dari state title
            year: year,                 // ambil dari state year
            description: description    // ambil dari state description
        })
            .then(response => {
                console.log(response);
                var message = response.data.message
                if (message) {
                    alert('Data berhasil diupdate')
                    navigate("/") // kalau tekan ok di popup alert, kembali ke halaman awal 
                }
            })
            // .catch untuk menangani error
            .catch(error => {
                console.error("Gagal update data:", error);
                alert("Gagal update data" + error.message)
            })
    }
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <div className="card shadow" style={{ width: "100%", maxWidth: "500px" }}>
                <div className="card-body">
                    <h5 className="mb-4 text-center">Edit Data Movie</h5>
                    <form onSubmit={handleUpdate}>
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
                                onChange={(e) => setYear(e.target.value ? parseInt(e.target.value) : null)}
                            />
                            <label htmlFor="floatingInputYear">Tahun</label>
                        </div>

                        <div className="form-floating mb-4">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInputDescription"
                                placeholder="Deskripsi Film..."
                                value={description || ""}
                                onChange={(e) => setDescription(e.target.value || null)}
                            />
                            <label htmlFor="floatingInputDescription">Deskripsi</label>
                        </div>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => navigate(-1)} // balik ke halaman sebelumnya
                            >
                                Batal
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default EditMovie