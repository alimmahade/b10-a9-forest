import React, { useContext } from "react";
import { MyAuthProviderContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Utils/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(MyAuthProviderContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <Loading></Loading>
      </div>
    );
  }
  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
