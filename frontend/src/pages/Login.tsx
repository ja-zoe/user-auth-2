import { useState } from "react"

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }
  
  return (
    <div className="w-full h-screen bg-slate-600 flex justify-center items-center">

        <form onSubmit={handleSubmit} className="flex flex-col bg-slate-700 w-1/5 h-[40%] rounded-lg justify-center items-center text-white">
          <h1 className="text-3xl"><strong>Login</strong></h1>
          <div className="flex flex-col items-center w-full mt-2">
            <label className="text-lg">Username</label>
            <input className="rounded-lg w-[60%] text-black pl-1" onChange={e => setUsername(e.target.value)} placeholder="Enter Username"/>
            <label className="text-lg">Password</label>
            <input className="rounded-lg w-[60%] text-black pl-1"  onChange={e => setPassword(e.target.value)} placeholder="Enter Password"/>
            <button type="submit" className="bg-slate-600 mt-2 rounded-lg w-20 h-7 text-lg hover:bg-slate-800">Sign Up</button>
          </div>
        </form>

    </div>
  )
}
export default Login