import React from 'react'
import SmallCard from './Cards/SmallCard'
function GiftCard() {
    return (
        <div>
        <section id="about" className="about section-bg">
          <div className="container-fluid px-5 mt-5" data-aos="fade-up">
            <div className="section-title mb-4">
              <h3
                style={{ fontSize: "45px", fontWeight: "600", color: "#404fab" }}
              >
                GIFT CARD CATEGORY
              </h3>
              </div>
              <div className="row">
                <SmallCard title={"eCommerce"} img={"https://source.unsplash.com/random"} text={"99+ Brands"}/>
                <SmallCard  title={"Accessories"} img={"https://source.unsplash.com/random"} text={"99+ Brands"}/>
                <SmallCard title={"Apparels"} img={"https://source.unsplash.com/random"} text={"99+ Brands"}/>
                <SmallCard title={"Grocery"} img={"https://source.unsplash.com/random"} text={"99+ Brands"}/>
                <SmallCard  title={"Food"} img={"https://source.unsplash.com/random"} text={"99+ Brands"}/>
                <SmallCard  title={"Travel"} img={"https://source.unsplash.com/random"} text={"99+ Brands"}/>
                <SmallCard title={"Electronics"} img={"https://source.unsplash.com/random"} text={"99+ Brands"}/>
                <SmallCard title={"Wellness"} img={"https://source.unsplash.com/random"} text={"99+ Brands"}/>
              </div>
              <div className="float float-right">
              <button type="button" className="btn btn-primary btn-lg">Browse All</button></div>
            
           
          </div>
        </section>
      </div>
    )
}

export default GiftCard
