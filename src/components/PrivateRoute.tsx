import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: {children: ReactNode }) =>  {
    const isAuth = localStorage.getItem("user");
    return isAuth ? <>{children}</> : <Navigate to="/login" />;

};

export default PrivateRoute;