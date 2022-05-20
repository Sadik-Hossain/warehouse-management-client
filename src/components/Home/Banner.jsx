import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src="https://i.ibb.co/x5mLGjq/modern-minimalist-interior-with-armchair-empty-white-wall-3d-rendering.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/k8byPJC/amazon-rivet-furniture-1533048038.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/NKYKSZW/furniture-banner-template-design-a636dbc0cd8fcad1e4f5c65dc3746501-screen.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
