import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import StudentForm from './components/StudentForm'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <StudentForm />
      </BrowserRouter>
    </div>
  )
}

export default App
