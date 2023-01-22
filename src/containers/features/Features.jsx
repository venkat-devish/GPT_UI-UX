import React from "react";
import "./features.scss";
import Feature from "../../components/feature/Feature";
import { featuresData } from "../../helpers/featuresData";

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="possibility">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((feature, idx) => {
          return (
            <Feature
              key={feature.title + idx}
              title={feature.title}
              text={feature.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
