import React from "react";
import "./Reasons.css";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
const Reasons = () => {
  return (
    <div>
      <div className="reasons" id="reasons">
        <div className="left-r">
          <img src={img8} alt="" />
          <img src={img7} alt="" />
          <img src={img6} alt="" />
          <img src={img9} alt="" />
        </div>
        <div className="right-r">
          <span>some Reason</span>
          <div>
            <span>why</span>
            <span>Choose us?</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
