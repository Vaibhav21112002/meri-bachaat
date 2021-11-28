import React from "react";
import "./Card.css";
function FeaturesCard({ img, title }) {
  return (
    <div className="col-lg-4 py-4">
    <div className="card baseBlock shadow-lg" style={{ width: "18rem" }}>
      <img className="card-img-top" src={img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text" style={{ fontWeight: "lighter" }}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
       
      </div>
    </div>
  </div>
  );
}

export default FeaturesCard;
