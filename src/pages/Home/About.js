import React from "react";
import Card from "./Cards/Card";
function About() {
  return (
    <div>
      <section id="about" className="about section-bg">
        <div className="container-fluid px-5 mt-5" data-aos="fade-up">
          <div className="section-title mb-4">
            <h3
              style={{ fontSize: "45px", fontWeight: "600", color: "#404fab" }}
            >
              CHECK OUT WHAT'S COOL ABOUT US
            </h3>
          </div>
          <div className="row">
            <Card
              button={"Gift Card for 9+ brands"}
              img={"https://source.unsplash.com/random"}
              button={"Buy Gift Card"}
            />
            <Card
              button={"Unbeatable Cashback"}
              img={"https://source.unsplash.com/random"}
              button={"Get Cashback"}
            />
            <Card
              button={"Product Comparison"}
              img={"https://source.unsplash.com/random"}
              button={"Compare Now"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
