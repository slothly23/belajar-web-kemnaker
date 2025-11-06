import { Routes, Route } from "react-router-dom";

// import halaman yang akan ditampilkan
import Home from "../components/pages/Home";
import Contact from "../components/pages/Contact";
import About from "../components/pages/About";


function AppRoutes() {
    return (
        // untuk buat path menuju page
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    )
}
export default AppRoutes;