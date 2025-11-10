import { Routes, Route } from "react-router-dom";

// import halaman yang akan ditampilkan
import Home from "../components/pages/Home";
import Contact from "../components/pages/Contact";
import About from "../components/pages/About";
import DataSiswa from "../components/DataSiswa";
import EditSiswa from "../components/EditSiswa";


function AppRoutes() {
    return (
        // untuk buat path menuju page
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/data-siswa' element={<DataSiswa />}/>
            <Route path='/edit-siswa/:id' element={<EditSiswa />}/> 
        </Routes>
    )
}
export default AppRoutes;