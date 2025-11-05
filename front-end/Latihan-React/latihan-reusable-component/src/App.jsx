import Button from './components/Button'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1>Latihan Reusable Component - Card dan Button</h1>
      <Card title = "Produk 1">
        <p>Ini adalah deskripsi produk pertama</p>
        <Button label="Beli sekarang" color="blue" onClick={() => {alert("Membeli produk 1")}}/>
      </Card>

      <Card title = "Produk 2">
        <p>Produk kedua dengan fitur menarik</p>
        <Button label="Detail" color="gray" onClick={() => {alert("Melihat detail produk 2")}}/>
      </Card>

      <h1>Latihan Reusable Component - Button</h1>
      <Button label="Simpan" color="green" onClick={() => {alert("Data disimpan!")}}/>  {/* saat tombol di klik akan muncul alert */}
      <Button label="Hapus" color="red" onClick={() => {alert("Data dihapus!")}}/>
      <Button label="Edit" color="orange" onClick={() => {alert("Edit data!")}}/>
    </>
  )
}

export default App
