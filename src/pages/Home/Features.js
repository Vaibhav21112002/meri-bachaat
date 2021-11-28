import React from "react";
// import "./Card.css";
import FeaturesCard from "./Cards/FeaturesCard";
function Features() {
  return (
    <div>
      <section id="about" className="about section-bg">
        <div className="container-fluid px-5 mt-5" data-aos="fade-up">
          <div className="section-title mb-4">
            <h3
              style={{ fontSize: "45px", fontWeight: "600", color: "#404fab" }}
            >
             KEY FEATURES
            </h3>
            </div>
            <div className="row">
              <FeaturesCard title={"Discounts throughout the year"} img={"https://source.unsplash.com/random"} />
              <FeaturesCard title={"Additional Discounts over Brand Discount"} img={"https://source.unsplash.com/random"} />
              <FeaturesCard title={"No limit whatsoever unlike credit card"} img={"https://source.unsplash.com/random"} />
              <FeaturesCard title={"Pay the exact amount you want to spend"} img={"https://source.unsplash.com/random"} />
              <FeaturesCard title={"0 % convience fee"} img={"https://source.unsplash.com/random"} />
              <FeaturesCard title={"No hidden Charges"} img={"https://source.unsplash.com/random"} />
              
            </div>
          
         
        </div>
      </section>
    </div>
  );
}

export default Features;
