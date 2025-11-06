import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import StudentForm from './components/StudentForm'
import StudentTable from './components/StudentTable'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <StudentForm />
        {/* <StudentTable /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
