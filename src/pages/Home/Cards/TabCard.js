import React from "react";

function TabCard({title, h1,h2,h3,h4,btn}) {
  return (
    <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
      <div class="card text-white mb-3 shadow-lg" style={{ backgroundColor: "#e6eef4" }}>
        <div style={{ color: "black" }}>
          <div
            class="card-header border-0"
            style={{
              backgroundColor: "#e6eef4",
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "2rem",
            }}
          >
            <h3>{title}</h3>
          </div>
          <div class="card-body">
            <div className="row">
              <div className="col-lg-3">
                <div
                  class="card-header border-0"
                  style={{
                    backgroundColor: "#e6eef4",
                    textAlign: "left",
                    fontWeight: "bold",
                    marginTop: "2rem",
                  }}
                >
                  <h3>01</h3>
                </div>
                <div className="card-body">
                <div className="blackquote" style={{fontSize:"0.9rem"}}><strong><p>{h1}</p></strong></div>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  class="card-header border-0"
                  style={{
                    backgroundColor: "#e6eef4",
                    textAlign: "left",
                    fontWeight: "bold",
                    marginTop: "2rem",
                  }}
                >
                  <h3>02</h3>
                </div>
                <div className="card-body">
                <div className="blackquote" style={{fontSize:"0.9rem"}}><strong><p>{h2}</p></strong></div>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  class="card-header border-0"
                  style={{
                    backgroundColor: "#e6eef4",
                    textAlign: "left",
                    fontWeight: "bold",
                    marginTop: "2rem",
                  }}
                >
                  <h3>03</h3>
                </div>
                <div className="card-body">
                <div className="blackquote" style={{fontSize:"0.9rem"}}><strong><p>{h3}</p></strong></div>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  class="card-header border-0"
                  style={{
                    backgroundColor: "#e6eef4",
                    textAlign: "left",
                    fontWeight: "bold",
                    marginTop: "2rem",
                  }}
                >
                  <h3>04</h3>
                </div>
                <div className="card-body">
                <div className="blackquote" style={{fontSize:"0.9rem"}}><strong><p>{h4}</p></strong></div>
                </div>
              </div>
            </div>
            <div style={{alignContent:"center",alignItems:"center"}}><button type="button" class="btn btn-primary btn-lg ">{btn}</button></div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabCard;
