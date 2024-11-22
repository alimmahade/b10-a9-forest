import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const DetailsPage = () => {
  const param = useParams();
  const data = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Details |Forest</title>
      </Helmet>
      <h1 className="text-5xl text-center mt-5 mb-5">
        Forest Adventure Details Here
      </h1>
      <div>
        {data
          .filter((d) => d.ID == param.id)
          .map((d) => (
            <div className="hero bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
                <img src={d.Image} className="rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold">
                    <span className="font-extrabold">AdventureTitle: </span>
                    {d.AdventureTitle}
                  </h1>
                  <p className="py-2">
                    <span className="font-extrabold">Description: </span>
                    {d.ShortDescription}
                  </p>
                  <p className="py-2">
                    <span className="font-extrabold">Adventure ID: </span>
                    {d.ID}
                  </p>
                  <p className="py-2">
                    <span className="font-extrabold">
                      Adventure CategoryName:{" "}
                    </span>
                    {d.CategoryName}
                  </p>
                  <p className="py-2">
                    <span className="font-extrabold">AdventureTitle: </span>
                    {d.ShortDescription}
                  </p>
                  <p className="py-2">
                    <span className="font-extrabold">AdventureTitle: </span>
                    {d.ShortDescription}
                  </p>
                  <p className="py-2">
                    <span className="font-extrabold">AdventureCost: </span>
                    {d.AdventureCost}
                  </p>
                  <button className="btn btn-primary">Talk With Expert</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DetailsPage;
