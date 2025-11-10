function CardMovie({ movie, onEdit, onDelete }) {
    return (
        <div className='col-sm-3 mb-4 d-flex'>
            <div className="card h-100 flex-fill" style={{ width: "18rem" }}>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{movie.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        {movie.year !== null ? movie.year : "-"}
                    </h6>
                    <p className="card-text flex-grow-1">
                        {movie.description || "Tidak ada deskripsi"}
                    </p>

                    {/* tombol di bagian bawah */}
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button
                            className="btn btn-outline-primary"
                            onClick={() => onEdit(movie.id)}
                        >
                            Edit
                        </button>
                        <button
                            className="btn btn-outline-danger"
                            onClick={() => onDelete(movie.id)}
                        >
                            Hapus
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardMovie;
