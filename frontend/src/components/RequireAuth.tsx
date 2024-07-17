import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

interface allowedRolesType {
    allowedRoles: number[]
}

const RequireAuth = ({ allowedRoles }: allowedRolesType) => {
    const { state } = useAuthContext()
    const location = useLocation()

    return (
        state.roles?.find(role => allowedRoles.includes(role))
            ? <Outlet/> 
            : state.isLoggedIn 
                ? <Navigate to="/unauthorized" replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequireAuth