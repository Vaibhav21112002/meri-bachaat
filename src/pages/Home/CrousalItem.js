import React from "react";

function CrousalItem({ title }) {
  return (
    <div class="card">
      <div
        class="card-horizontal"
        style={{ display: "flex", flex: "1 1 auto" }}
      >
        <div class="card-body">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div class="img-square-wrapper">
          <img
            class=""
            src="http://via.placeholder.com/300x180"
            alt="Card image cap"
          />
        </div>
      </div>
    </div>
  );
}

export default CrousalItem;
