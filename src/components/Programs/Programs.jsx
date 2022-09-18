import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import rightArrow from "../../assets/rightArrow.png";
export const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore Our</span>
        <span>Programs</span>
        <span className="stroke-text">To Shape You</span>
      </div>
      <div className="program-categories">
        {programsData.map((category) => (
          <div className="category">
            {category.image}
            <span>{category.heading} </span>
            <span>{category.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <span>
                {" "}
                <img src={rightArrow} alt="" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
