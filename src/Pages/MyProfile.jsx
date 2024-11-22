import React, { useContext, useState } from "react";
import { MyAuthProviderContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user, updateUserProfile, setUser } = useContext(
    MyAuthProviderContext
  );
  return (
    <div className="hero-content flex-col">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl text-center">User Information</h1>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={user.photoURL} alt="User-image" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">User Name: {user.displayName}</h2>
            <p>Email: {user.email}</p>
          </div>
        </div>
      </div>

      <Link to={"/updateprofile"}>
        <button className="btn btn-primary">Update Your Profile</button>
      </Link>
    </div>
  );
};

export default MyProfile;
