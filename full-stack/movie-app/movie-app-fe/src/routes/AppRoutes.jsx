import { Routes, Route } from "react-router-dom";

// import halaman yang akan ditampilkan
import Movies from "../components/pages/Movies";
import EditMovie from "../components/pages/EditMovie";


function AppRoutes() {
    return (
        // untuk buat path menuju page
        <Routes>
            <Route path='/' element={<Movies />}/>
            <Route path='/edit-movie/:id' element={<EditMovie />}/>
        </Routes>
    )
}
export default AppRoutes;