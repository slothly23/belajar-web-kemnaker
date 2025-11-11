import { Routes, Route } from "react-router-dom";

// import halaman yang akan ditampilkan
import Movies from "../components/pages/Movies";
import EditMovie from "../components/pages/EditMovie";
import Home from "../components/pages/Home";


function AppRoutes() {
    return (
        // untuk buat path menuju page
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/movies' element={<Movies />}/>
            <Route path='/edit-movie/:id' element={<EditMovie />}/>
        </Routes>
    )
}
export default AppRoutes;