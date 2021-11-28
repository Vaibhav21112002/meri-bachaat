import React from "react";

function CrousalItem({ title }) {
  return (
    <div className="card">
      <div
        className="card-horizontal"
        style={{ display: "flex", flex: "1 1 auto" }}
      >
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="img-square-wrapper">
          <img
            className=""
            src="http://via.placeholder.com/300x180"
            alt="Card image cap"
          />
        </div>
      </div>
    </div>
  );
}

export default CrousalItem;
