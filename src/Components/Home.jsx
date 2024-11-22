import React from "react";
import Slider from "../Pages/Slider";
import Experience from "../Pages/Experience";
import { Helmet } from "react-helmet-async";
import AnimatedComponent from "../AnimatedComponent";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home |Forest</title>
      </Helmet>
      <Slider></Slider>
      <AnimatedComponent></AnimatedComponent>
      <Experience></Experience>
      <div className="text-center mt-10 mb-10 mx-auto border rounded-lg p-6">
        <h1 className="text-5xl uppercase">Top Stories</h1>
        <p className="mb-10 mt-5">
          <ol>
            <li>
              # Embark on a trans formative journey at our 3 ecolodges in Tam
              bopata, where a luxury experience goes beyond comfort and meets
              purpose in the heart of the Peruvian Amazon Rain forest.
            </li>
            <li>
              ## Refugio Amazonas Lodge in Tambopata serves as the gateway to
              the mysterious Peruvian Amazon. Welcome, you've made the perfect
              choice, and now the question arises: what to do at Ref...
            </li>
          </ol>
        </p>
        <button className="btn btn-primary">More Story</button>
      </div>
      <div className="text-center mt-10 mb-10 bg-slate-100 p-6 lg:p-24">
        <form>
          <h6 className="text-5xl uppercase mb-4">Join To Our Newsletter</h6>
          <fieldset className="form-control">
            <label className="text-center mb-4">
              <span className="text-center">Enter your email address</span>
            </label>
            <div className="space-x-2">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Home;
