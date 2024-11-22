import React from "react";
import errorPic from "../assets/Error-img.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <div className="w-[1000px] mx-auto">
        <img src={errorPic} alt="" />
      </div>
      <h1 className="text-5xl text-center">404 Not Found</h1>
      <p className="text-center text-2xl">an Error Occurred</p>
      <button className="btn btn-primary mt-10">
        <Link to={"/"}>Back to Home Page</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
