import React from "react";
import './Card.css';
function Card({ img, title, button }) {
  return (
    <div className="col-lg-4 py-4">
      <div className="card baseBlock shadow" style={{ width: "18rem" }}>
        <img className="card-img-top img-fluid" src={img} alt="Card image cap" />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="p-4">
            <a href="#" className="btn btn-primary">
              {button}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
