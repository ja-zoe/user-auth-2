import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Account from './pages/Account'
import Navbar from './components/Navbar'
import RequireAuth from './components/RequireAuth'
import Unauthorized from './pages/Unauthorized'
import Admin from './pages/Admin'

const roles = {
  user: 2001,
  editor: 1984,
  admin: 4008
}

function App() {

  return (
    <>
      <Navbar/>
      <Routes>

        {/* Public routes */}
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />

        {/* Private routes */}
        <Route element={<RequireAuth allowedRoles={[roles.user]}/>}>
          <Route path='/account' element={<Account/>} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[roles.admin]}/>}>
          <Route path='/admin' element={<Admin/>} />
        </Route>

        {/* Unauthorized route */}
        <Route path='/unauthorized' element={<Unauthorized/>}/>
      </Routes>
    </>
  )
}

export default App
