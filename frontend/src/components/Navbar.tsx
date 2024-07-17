import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

const Navbar = () => {
  const { logout, state } = useAuthContext()


  return (
    <nav className="absolute w-full flex h-[10%] items-center bg-slate-500/70 text-white justify-between">
        <Link to={'/'} className="ml-[10%]"><h1>HOME</h1></Link>
        <ul className="flex gap-16 mr-[10%]">
            {state.isLoggedIn ? (
              <>
                <Link to={'/account'}><li>ACCOUNT</li></Link>
                <button onClick={() => logout()}><li>LOGOUT</li></button>
              </>
            ) : (
              <>
                <Link to={'/login'}><li>LOGIN</li></Link>
                <Link to={'/signup'}><li>SIGNUP</li></Link>
              </> 
            )
            }
        </ul>
    </nav>
  )
}
export default Navbar