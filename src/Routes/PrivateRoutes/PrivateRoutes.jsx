import { useContext } from "react";
import { AuthContext } from "../../pages/provider/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    if(loading){
        return <div className="text-center">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }
    if(user?.email){
        return children;
    }
    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoutes;