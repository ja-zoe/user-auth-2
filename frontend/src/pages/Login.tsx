import { useState } from "react"
import axios from "axios"
import { useNavigate, useLocation } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { dispatch } = useAuthContext()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/account'

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3001/user/login',{
        username,
        password
      })

      const { email, roles } = response.data

      dispatch({
        type: "LOGIN",
        payload: {
          username,
          email,
          roles
        }
      })
      console.log(roles)
      navigate(from, { replace: true })
    } catch (error) {
      if(axios.isAxiosError(error)){
        console.error("Error logging in: ", error.response?.data?.message || 'An error occurred');
      } else {
        console.error("Error logging in: ", error)
      }
    }
  }
  
  return (
    <div className="w-full h-screen bg-slate-600 flex justify-center items-center">

        <form onSubmit={handleSubmit} className="flex flex-col bg-slate-700 w-1/5 h-[40%] rounded-lg justify-center items-center text-white">
          <h1 className="text-3xl"><strong>Log In</strong></h1>
          <div className="flex flex-col items-center w-full mt-2">
            <label className="text-lg">Username</label>
            <input className="rounded-lg w-[60%] text-black pl-1" type="text" required onChange={e => setUsername(e.target.value)} placeholder="Enter Username"/>
            <label className="text-lg">Password</label>
            <input className="rounded-lg w-[60%] text-black pl-1" type="password" required onChange={e => setPassword(e.target.value)} placeholder="Enter Password"/>
            <button type="submit" className="bg-slate-600 mt-2 rounded-lg w-20 h-7 text-lg hover:bg-slate-800">Log In</button>
          </div>
        </form>

    </div>
  )
}
export default Login