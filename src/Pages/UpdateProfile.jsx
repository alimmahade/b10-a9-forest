import React, { useContext } from "react";
import { MyAuthProviderContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, updateUserProfile, setUser } = useContext(
    MyAuthProviderContext
  );
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;

    updateUserProfile({ displayName: name, photoURL: photo }).then(
      setUser({
        ...user,
        photoURL: e.target.photo.value,
        displayName: e.target.name.value,
      })
    );
    toast("user information update successfully");
    navigate("/dashboard");
  };
  return (
    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleUpdate}>
        <h1 className="text-3xl font-bold text-center">Update User Profile</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo url</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="photo-url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Update Profile</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
