import { useState } from "react";

// latihan useState
function Counter() {
    const [count, setCount] = useState(0);
    // count : variabel
    // setCount : fungsi untuk menubah nilai awal
    // useState(0) , 0 adalah nilai awal, dan bisa berubah

    return (
        <div>
            <h3>Nilai saat ini: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Tambah</button> 
            <button onClick={() => setCount(count - 1)}>Kurangi</button>
            {/* event onClick={() => setCount(count + 1)} menjalankan sebuah fungsi ketika di klik */}
        </div>
    )
}
export default Counter;