import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "animate.css";

const Experience = () => {
  const [experienceCards, setExperienceCards] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setExperienceCards(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1">
        {experienceCards.map((card) => (
          <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={card.Image}
                className="lg:w-[640px] lg:h-[480px] sm:h-auto md:h-auto rounded-lg shadow-2xl animate__animated animate__bounce"
              />
              <div>
                <h1 className="text-5xl font-bold">{card.AdventureTitle}</h1>
                <p className="py-6">
                  <span className="font-extrabold">ShortDescription:</span>{" "}
                  {card.ShortDescription}
                </p>
                <p className="py-6">
                  <span className="font-extrabold">EcoFriendlyFeatures:</span>{" "}
                  {card.EcoFriendlyFeatures}
                </p>
                <div className="card-actions">
                  <Link to={`/details/${card.ID}`}>
                    <button className="btn btn-primary">Explore Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
