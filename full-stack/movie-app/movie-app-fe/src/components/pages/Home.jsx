import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="container py-5 text-center">
            <h1 className="fw-bold text-primary mb-3">Selamat Datang di MovieApp 🎥</h1>
            <p className="text-muted fs-5">
                Aplikasi sederhana untuk mengelola daftar film favoritmu.
                Tambah, edit, dan hapus data movie dengan mudah!
            </p>
            <Link to="/movies" className="btn btn-primary btn-lg mt-3">
                Lihat Daftar Movie
            </Link>
        </div>

    )
}

export default Home