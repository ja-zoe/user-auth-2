import { useAuthContext } from "../hooks/useAuthContext"

const Account = () => {
  const { username } = useAuthContext().state
  
  return (
    <div className="w-full h-screen bg-slate-600 flex justify-center items-center">
      <h1 className="text-cyan-300 text-3xl"> {username ? `${username} is signed in` : "No user is currently signed in"} </h1>
    </div>
  )
}
export default Account