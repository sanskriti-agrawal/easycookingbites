import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Recipe = () => {
  return (
    <div className="carousel">
      <h1 className="heading1">Our Top Recipes</h1>

      <Carousel fade>
        <Carousel.Item interval={10}>
          <img
            className="c-image"
            src="assets/dm.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-heading">Dal Makhani</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item >

        <Carousel.Item interval={10}>
          <img
            className="c-image"
            src="assets/alook.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="carousel-heading">Aloo Kulche</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="c-image"
            src="assets/kher.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="carousel-heading">Kher</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Recipe;
