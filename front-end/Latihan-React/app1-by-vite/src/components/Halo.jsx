// menggunakan props
// Props mirip seperti memberikan argumen pada function
// Digunakan untuk mengoper data dari parent ke child component
// Halo(props)

function Halo({nama}){
    // menuliskan HTML di bagian return
    return (
        <h2>Halo, {nama}</h2> // {} : isinya kode javascript
    )
}
export default Halo; // harus di export