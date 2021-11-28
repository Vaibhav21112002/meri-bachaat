import React from 'react'
import CrousalItem from './CrousalItem'
function Crousal() {
    return (
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style={{position:"relative"}}>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <CrousalItem/>
        </div>
        <div class="carousel-item">
          Bye
        </div>
        <div class="carousel-item">
         Kya haal
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    )
}

export default Crousal
