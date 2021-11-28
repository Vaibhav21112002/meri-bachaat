import React from "react";
import Useful from "./Useful";
import Logo from "./Logo";
import Download from "./Download";
import Social from "./Social";
import Services from "./Services";
function Foot() {
  return (
    <div style={{backgroundColor:"#404fab"}}>
      <footer id="footer" data-aos="fade-in">
        <div className="footer-top">
          <div className="container-fluid px-5">
            <div className="row">
              <Logo />
              <Useful />

              <Services />

              <Social />
              <Download/>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Foot;
