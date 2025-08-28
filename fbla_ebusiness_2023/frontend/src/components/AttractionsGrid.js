import React from "react";
import "../components/css/AttractionsGrid.scss";

import { Container, Button, CardGroup, UncontrolledCollapse } from "reactstrap";
import ImageCarousel from "components/ImageCarousel";
import FadeIn from "components/FadeIn";

function AttractionsGrid() {
  return (
    <div className="attractions-grid-wrapper">
      <div className="attractions-grid">
        <div className="grid-item">
          <div className="carousel-wrapper">
            <ImageCarousel className="attraction-carousel" images={images} />
            <h2 className="heading">Local <span style={{color: "rgb(0,124,194)"}}>Attractions</span></h2>
            <Button
              id="attraction-carousel-button"
              onClick={() => {
                document
                  .querySelector(".map-div")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Show on Map
            </Button>
          </div>
        </div>
        <div className="grid-item">
          <UncontrolledCollapse toggler="#attraction-carousel-button">
            <div className="map-div">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24497.828966500067!2d-122.44720912823826!3d37.81443829940788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586deffffffc3%3A0xcded139783705509!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1682053975597!5m2!1sen!2sus"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </UncontrolledCollapse>
        </div>
      </div>
    </div>
  );
}

const images = [
  {
    src: require("../assets/imgs/attractions/golden_gate_bridge.jpg"),
    altText: "Attraction 1",
  },
  {
    src: require("../assets/imgs/attractions/fisherman.jpg"),
    altText: "Attraction 2",
  },
  {
    src: require("../assets/imgs/attractions/alcatraz_island.jpg"),
    altText: "Attraction 3",
  },
  {
    src: require("../assets/imgs/attractions/monterey_aquarium.jpg"),
    altText: "Attraction 4",
  },
];

export default AttractionsGrid;
