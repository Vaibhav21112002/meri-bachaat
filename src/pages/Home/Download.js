import React from "react";
import "./Download.css";
function Download() {
  return (
    <div class="flex social-btns">
      <div className="apple-btn" style={{marginLeft:"6rem"}}>
        <a class="app-btn blu flex vert" href="http:apple.com">
          <div style={{marginRight:"2px"}}>
         
            <i
              className="fa fa-apple"
              style={{ fontSize: "48px", color: "white", marginRight: "3px" }}
            ></i>
          </div>

          <p>
            Available on the <br /> <span class="big-txt">App Store</span>
          </p>
        </a>
      </div>
      <div className="apple-btn" style={{marginLeft:"12rem"}}>
      <a class="app-btn blu flex vert" href="http:google.com">
      <div style={{marginRight:"2px"}}>
         
      <i
        className="fa fa-google"
        style={{ fontSize: "48px", color: "white", marginRight: "7px" }}
      ></i>
    </div>
        <p>
          Get it on <br /> <span class="big-txt">Google Play</span>
        </p>
      </a>
      </div>
    </div>
  );
}

export default Download;
