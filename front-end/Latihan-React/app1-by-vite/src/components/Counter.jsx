import { useState } from "react";

// latihan useState
function Counter() {
    const [count, setCount] = useState(0);
    // count : variabel Tempat data tersimpan
    // setCount : function untuk menubah data
    // useState(0) , 0 adalah nilai awal, dan data bisa berubah

    return (
        <div>
            <h3>Nilai saat ini: {count}</h3>
            <button onClick={() => setCount(count - 1)}>Kurangi</button>
            <button onClick={() => setCount(count + 1)}>Tambah</button> 
            {/* event onClick={() => setCount(count + 1)} menjalankan sebuah fungsi ketika di klik */}
        </div>
    )
}
export default Counter;