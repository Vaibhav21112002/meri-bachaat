import React from "react";
import OfferCard from "./Cards/OfferCard";
function Offer() {
  return (
    <div>
      <section id="about" className="about section-bg">
        <div className="container-fluid px-5 mt-5" data-aos="fade-up">
          <div className="section-title mb-4">
            <h3
              style={{ fontSize: "45px", fontWeight: "600", color: "#404fab" }}
            >
              WHAT DO WE OFFER
            </h3>
          </div>
          <div className="row">
            <OfferCard
              title={"India's Largest Pre-Shopping Destination"}
              img={"https://source.unsplash.com/random"}
            />
            <OfferCard
              title={"Gift Cards for 300+ brands"}
              img={"https://source.unsplash.com/random"}
            />
            <OfferCard
              title={"Product Comparison"}
              img={"https://source.unsplash.com/random"}
            />
            <OfferCard
              title={"Discount throughout 365 days"}
              img={"https://source.unsplash.com/random"}
            />
            <OfferCard
              title={"Super Savings"}
              img={"https://source.unsplash.com/random"}
            />
            <OfferCard
              title={"Unbeatable Cashback"}
              img={"https://source.unsplash.com/random"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Offer;
