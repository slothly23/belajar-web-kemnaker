import { useState } from 'react'

function StudentForm({ onAdd }) {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [alamat, setAlamat] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nama || !email || !alamat) return;

        const newStudent = { id: Date.now(), nama, email, alamat };
        onAdd(newStudent);

        setNama("");
        setEmail("");
        setAlamat("");
    };

  return (
    <form onSubmit={handleSubmit} className='card p-3 shadow-sm mb-4'>
        <h5 className='mb-3'>Tambah Data Siswa</h5>
        <div className="mb-3">
            <label className="form-label">Nama</label>
            <input 
                type="text" 
                className="form-control" 
                value={nama}
                onChange={ (e) => setNama(e.target.value) }
                />
        </div>
        <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
                type="email" 
                className="form-control" 
                value={email}
                onChange={ (e) => setEmail(e.target.value) }
                />
        </div>
        <div className="mb-3">
            <label className="form-label">Alamat</label>
            <textarea 
                className="form-control" 
                rows={2}
                value={alamat}
                onChange={ (e) => setAlamat(e.target.value) }
                />
        </div>
        <button type='submit' className="btn btn-primary w-100">
            Tambah
        </button>
    </form>
  );
}

export default StudentForm;