export default function StudentTable({ students, onDelete }) {
  return (
    <table className="table table-bordered table-striped">
        <thead className="table-dark">
            <tr>
                <th>Nama</th>
                <th>Email</th>
                <th>Alamat</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
            { students.length === 0 ? (
                <tr>
                    <td colSpan="4" className="text-center text-muted">
                        Belum ada data siswa
                    </td>
                </tr>
            ) : (
                students.map((student) => (
                    <tr key={student.id}>
                        <td>{student.nama}</td>
                        <td>{student.email}</td>
                        <td>{student.alamat}</td>
                        <td>
                            <button 
                                className="btn btn-danger btn-sm"
                                onClick={() => onDelete(student.id)}
                            >
                                Hapus
                            </button>
                        </td>
                    </tr>
                ))
            ) }
        </tbody>
    </table>
  );
}
