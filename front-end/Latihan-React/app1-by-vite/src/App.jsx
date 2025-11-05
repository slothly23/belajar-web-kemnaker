import Counter from "./components/Counter";
import Halo from "./components/Halo" // import component Hallo dari folder components, file Hallo.jsx

function App() {
  // return hanya bisa mengembalika 1 nilai
  // kalau banyak nilai harus dilapisi dengan 1 nilai
  // bisa dibungkus pake <div></div> atau tag kosong <></>
  return (
    <div>
      <h1>Latihan Komponen di React (Vite)</h1>
      <Halo nama="Zalia"/> {/* memanggil component Hallo untuk ditampilkan */}
      <Halo nama="Tech"/> {/* masukin nilai nama */}
      <Counter />
    </div>
  )
}

export default App;
