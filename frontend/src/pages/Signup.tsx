import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useAuthContext } from "../hooks/useAuthContext"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { dispatch } = useAuthContext()

  // On user submit, send data to server to process registration.
  // On success, user is navigated to the login page
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:3001/user/register", {
        email,
        username,
        password
      })
      const { roles } = response.data
      dispatch({
        type: "LOGIN",
        payload: {
          email,
          username,
          roles
        }
      })
      navigate('/account') 
    } catch(error) {
      console.error("Error during registration: ", error)
    }
  }
  
  return (
    <div className="w-full h-screen bg-slate-600 flex justify-center items-center">

        <form onSubmit={handleSubmit} className="flex flex-col bg-slate-700 w-1/5 h-[40%] rounded-lg justify-center items-center text-white">
          <h1 className="text-3xl"><strong>Sign Up</strong></h1>
          <div className="flex flex-col items-center w-full mt-2">
            <label className="text-lg">Email</label>
            <input type="email" required className="rounded-lg w-[60%] text-black pl-1" onChange={e => setEmail(e.target.value)} placeholder="Enter Email"/>
            <label className="text-lg">Username</label>
            <input type="text" className="rounded-lg w-[60%] text-black pl-1" required onChange={e => setUsername(e.target.value)} placeholder="Enter Username"/>
            <label className="text-lg">Password</label>
            <input type="password" required className="rounded-lg w-[60%] text-black pl-1" onChange={e => setPassword(e.target.value)} placeholder="Enter Password"/>
            <button type="submit" className="bg-slate-600 mt-2 rounded-lg w-20 h-7 text-lg hover:bg-slate-800">Sign Up</button>
          </div>
        </form>

    </div>
  )
}
export default Signup