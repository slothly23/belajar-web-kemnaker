import Button from './components/Button'

function App() {
  return (
    <>
      <h1>Latihan Reusable Component - Button</h1>
      {/* saat tombol di klik akan muncul alert */}
      <Button label="Simpan" color="green" onClick={() => {alert("Data disimpan!")}}/>  
      <Button label="Hapus" color="red" onClick={() => {alert("Data dihapus!")}}/>
      <Button label="Edit" color="orange" onClick={() => {alert("Edit data!")}}/>
    </>
  )
}

export default App
